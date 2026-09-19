import React, { useState, useEffect } from 'react';
import { PageType, Room } from './types';
import { GALLERY_ITEMS } from './data/guestHouseData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState('Deluxe Room');
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync state with URL pathname/hash for realistic multi-page navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      if (['home', 'rooms', 'gallery', 'contact'].includes(path)) {
        setCurrentPage(path as PageType);
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // initial sync

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.history.pushState(null, '', page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (roomType?: string) => {
    if (roomType) {
      setPreselectedRoom(roomType);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-900 selection:text-amber-200">
      
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onPageChange={navigateToPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onPageChange={navigateToPage}
            onOpenBookingModal={handleOpenBookingModal}
            onSelectRoom={(room) => setSelectedRoomForDetail(room)}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBookingModal={handleOpenBookingModal}
            onSelectRoom={(room) => setSelectedRoomForDetail(room)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onPageChange={navigateToPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoom={preselectedRoom}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onBookRoom={(roomName) => {
          setSelectedRoomForDetail(null);
          handleOpenBookingModal(roomName);
        }}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
}
