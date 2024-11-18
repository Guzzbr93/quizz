import React, { useState } from 'react';
import { Star } from 'lucide-react';
import ImageModal from './ImageModal';

const testimonials = [
  {
    name: "Maria Silva",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Em apenas 2 meses, já estou faturando R$ 2.000 por mês com meus brigadeiros gourmet!",
    rating: 5
  },
  {
    name: "Ana Santos",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100&h=100",
    text: "As receitas são práticas e deliciosas. Minhas clientes sempre voltam pedindo mais!",
    rating: 5
  },
  {
    name: "Carla Oliveira",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=100&h=100",
    text: "As dicas de precificação me ajudaram a ter lucro real com minhas vendas!",
    rating: 5
  }
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-pink-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Histórias de Sucesso</h2>
          <p className="text-gray-600">Veja como outras mulheres transformaram suas vidas com nosso método</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 relative shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <button 
                  onClick={() => setSelectedImage(testimonial.avatar)}
                  className="relative group"
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-pink-500 transition-all cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs">Ampliar</span>
                  </div>
                </button>
                <div>
                  <h3 className="text-gray-800 font-semibold">{testimonial.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
              <div className="absolute -top-4 -left-4 text-pink-500 text-6xl opacity-20">"</div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage}
          altText="Foto do depoimento"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}