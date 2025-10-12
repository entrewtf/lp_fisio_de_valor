import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto max-w-5xl">
        <img src="/logo.png" alt="Fisio de Valor por Carla Gutschow Logo" className="h-20 md:h-24" />
      </div>
    </header>
  );
};

export default Header;