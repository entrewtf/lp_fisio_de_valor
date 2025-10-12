import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto max-w-5xl flex items-center space-x-4">
        <img src="https://i.ibb.co/L5B7s3Z/logo-fisio-de-valor.png" alt="Fisio de Valor Logo" className="h-16 md:h-20" />
        <div className="border-l border-gray-300 pl-4">
            <p className="text-sm text-gray-500">por</p>
            <p className="text-lg font-semibold text-[#514e4a] -mt-1">Carla Gutschow</p>
        </div>
      </div>
    </header>
  );
};

export default Header;