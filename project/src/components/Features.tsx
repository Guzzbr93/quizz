import React from 'react';
import { Book, Gift, Calculator, Package } from 'lucide-react';

const features = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Receitas Exclusivas",
    description: "50+ receitas testadas e aprovadas, com passo a passo detalhado e dicas especiais."
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Planilhas de Custos",
    description: "Calcule seus gastos e defina o preço ideal para maximizar seus lucros."
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Marketing Digital",
    description: "Aprenda a divulgar seus produtos nas redes sociais e conquistar clientes."
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Bônus Exclusivos",
    description: "Guia de decoração, planilhas e dicas de embalagens atrativas."
  }
];

export default function Features() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tudo Que Você Vai Receber
          </h2>
          <p className="text-gray-600">
            Conteúdo exclusivo para iniciar seu negócio de doces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-pink-50 p-6 rounded-xl hover:bg-pink-100 transition-all"
            >
              <div className="text-pink-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}