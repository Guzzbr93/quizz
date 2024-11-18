import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <img 
          src={imageUrl.replace('w=100&h=100', 'w=800&h=800')} 
          alt={altText}
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}