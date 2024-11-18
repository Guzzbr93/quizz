import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface QuizOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  stage: 'engagement' | 'problem' | 'desire' | 'solution' | 'action';
}

const stageGradients = {
  engagement: 'from-blue-500 to-blue-600',
  problem: 'from-red-500 to-red-600',
  desire: 'from-purple-500 to-purple-600',
  solution: 'from-green-500 to-green-600',
  action: 'from-yellow-500 to-yellow-600'
};

export default function QuizOption({ text, isSelected, onClick, stage }: QuizOptionProps) {
  const gradient = stageGradients[stage];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-lg text-left transition-all ${
        isSelected 
          ? `bg-gradient-to-r ${gradient} text-white shadow-lg` 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-white' : 'border-gray-300'
        }`}>
          {isSelected && <Check className="w-3 h-3" />}
        </div>
        <span className="flex-1">{text}</span>
      </div>
    </motion.button>
  );
}