import React from 'react';
import { Book, DollarSign, Clock } from 'lucide-react';

interface HeroProps {
  onCheckout: () => void;
}

export default function Hero({ onCheckout }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full mb-8">
            Guia Definitivo 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
            Transforme Sua Paixão por Doces em uma Renda Extra Deliciosa!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Descubra receitas fáceis, dicas de venda e conquiste sua independência financeira
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <Book className="w-5 h-5 text-pink-500" />
              <span>+50 Receitas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-pink-500" />
              <span>Preparo Rápido</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="w-5 h-5 text-pink-500" />
              <span>Lucro Garantido</span>
            </div>
          </div>
          
          <button 
            onClick={onCheckout}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
          >
            Quero Começar Agora!
          </button>
          
          <p className="mt-4 text-sm text-gray-500">
            *Acesso imediato após a compra
          </p>
        </div>
      </div>
    </div>
  );
}