import React, { useState } from 'react';

const MobileUpdateModal = ({ isOpen, onClose, onUpdateMobile }) => {
  const [mobile, setMobile] = useState('');

  const handleUpdateMobile = () => {
    onUpdateMobile(mobile);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Update Mobile</h2>
          <input
            type="text"
            placeholder="New Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleUpdateMobile}
            >
              Update Mobile
            </button>
            <button className="text-gray-500 px-4 py-2 rounded-md" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUpdateModal;