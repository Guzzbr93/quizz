import React, { useState } from 'react';
import { Check, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface PricingProps {
  onCheckout: () => void;
}

export default function Pricing({ onCheckout }: PricingProps) {
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  const handleTimerComplete = () => {
    setIsOfferExpired(true);
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden shadow-xl">
          {!isOfferExpired && (
            <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-2 rounded-bl-lg">
              Oferta Limitada
            </div>
          )}
          
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isOfferExpired ? 'Preço Normal' : 'Oferta de Lançamento'}
            </h2>
            {!isOfferExpired && (
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Oferta termina em:</span>
                <CountdownTimer 
                  initialMinutes={20} 
                  onComplete={handleTimerComplete}
                />
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">50+ receitas exclusivas e testadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">Guia de decoração de doces</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">Planilhas de custos e precificação</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">Dicas de marketing digital</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <span className="text-gray-500 line-through text-2xl">
                  {isOfferExpired ? 'R$ 147,90' : 'R$ 97,90'}
                </span>
                <div className="text-5xl font-bold text-gray-800">
                  {isOfferExpired ? 'R$ 97,90' : 'R$ 27,90'}
                </div>
                <span className="text-gray-600">Pagamento único</span>
              </div>
              
              <button 
                onClick={onCheckout}
                className={`${
                  isOfferExpired 
                    ? 'bg-gray-500 hover:bg-gray-600' 
                    : 'bg-pink-500 hover:bg-pink-600'
                } text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 w-full`}
              >
                {isOfferExpired ? 'Comprar Agora' : 'Garantir Meu Ebook'}
              </button>
              
              <p className="mt-4 text-sm text-gray-600">
                Garantia de 30 dias ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}