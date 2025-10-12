import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-4 bg-[#f7f2d7]">
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-[#514e4a]">
          SEJA O FISIO DE VALOR.
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-xl">
          A mentoria que vai transformar seu trabalho em reconhecimento, previsibilidade e renda real.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="bg-[#2c6b67] text-white font-bold py-5 px-12 rounded-lg text-xl hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            QUERO ME INSCREVER AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;