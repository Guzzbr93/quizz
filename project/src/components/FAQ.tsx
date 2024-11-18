import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo tenho acesso ao conteúdo?",
    answer: "O acesso é vitalício! Você poderá acessar o material quando e onde quiser, para sempre."
  },
  {
    question: "Preciso ter experiência com confeitaria?",
    answer: "Não! Nossas receitas são pensadas para iniciantes, com passo a passo detalhado e dicas práticas."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a compra, você receberá um e-mail com seus dados de acesso à área de membros."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Oferecemos garantia de 30 dias. Se não ficar satisfeita, devolvemos 100% do seu investimento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-pink-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">Tudo que você precisa saber sobre o ebook</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}