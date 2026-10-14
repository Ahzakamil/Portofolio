'use client';

import { useState } from 'react';
import MainContent from './components/MainContent';
import NavbarComponent from './components/NavbarComponent';
import Modal from './components/dashboard/Modal';
import FetchComponent from './components/dashboard/Fecth';
import FetchCarts from './components/dashboard/Fecth';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarComponent />
      <MainContent />
     
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Buka Modal
        </button>

        {isOpen ? <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} /> : null}
          
      </div>
      <FetchCarts  /> 
    </>
  );
}