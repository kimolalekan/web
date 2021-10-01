import React from 'react';

export default function PreloaderModal({ hide }) {
  return (
    <div className="preloader-modal" style={{ display: hide ? 'none' : 'flex' }}>
      <img className="pulse" src="/images/logo-icon.png" />
    </div>
  );
}
