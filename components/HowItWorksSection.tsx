import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#fdfcf8]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#514e4a] mb-8">Como funciona a Mentoria</h2>
            <div className="space-y-4 text-lg text-gray-700">
                <p>Mentoria em grupo com encontros ao vivo.</p>
                <p>Acompanhamento prático e revisões individuais.</p>
                <p>Início em [data].</p>
                <p className="font-bold text-[#2c6b67]">Vagas limitadas.</p>
            </div>
            <div className="mt-10">
                <a
                    href="#cta"
                    className="bg-[#2c6b67] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                    QUERO ENTRAR NA MENTORIA
                </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-yellow-300 rounded-full opacity-20 blur-2xl"></div>
                <img 
                    src="https://i.ibb.co/qjfJ1y9/carla-gutschow.png" 
                    alt="Carla Gutschow" 
                    className="relative rounded-full max-w-sm w-full shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;