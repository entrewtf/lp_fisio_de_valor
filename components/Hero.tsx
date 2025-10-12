import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-24 px-4 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Shapes */}
      <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-br from-yellow-200 via-green-200 to-teal-200 rounded-full opacity-50 filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-yellow-200 via-green-200 to-teal-200 rounded-full opacity-40 filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-left">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#514e4a] leading-tight animate-fade-in uppercase">
            Seja o Fisio de Valor.
          </h1>
          <p style={{ animationDelay: '200ms' }} className="mt-4 text-xl md:text-2xl text-gray-700 animate-fade-in">
            A mentoria que transforma competência técnica em autoridade, segurança e reconhecimento.
          </p>
          <p style={{ animationDelay: '400ms' }} className="mt-8 text-lg md:text-xl max-w-2xl text-gray-600 animate-fade-in">
            Aprenda o que nunca te ensinaram sobre posicionamento, captação e vendas — pra finalmente ser pago pelo que realmente entrega.
          </p>
          <div style={{ animationDelay: '600ms' }} className="mt-12 animate-fade-in">
            <a
              href="#cta"
              className="bg-[#2c6b67] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
            >
              QUERO SER UM FISIO DE VALOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;