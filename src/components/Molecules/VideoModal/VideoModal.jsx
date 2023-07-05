import React, { useEffect, useRef } from 'react';

const VideoModal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !event.target.classList.contains('modal-content')
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, setShowModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-auto">
          <div
            ref={modalRef}
            className="bg-primary-600 z-30 rounded-lg shadow-lg overflow-hidden "
          >
            <div className="modal-content">{children}</div>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-20 bg-black opacity-50 cursor-pointer"
          ></div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
