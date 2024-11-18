import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizHeader({ currentQuestion, totalQuestions }: QuizHeaderProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="text-center mb-8">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full mb-4"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">Quiz Interativo</span>
      </motion.div>
      
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
      >
        Descubra Como Realizar Seu Sonho
      </motion.h1>
      
      <motion.p 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-lg mx-auto"
      >
        Responda algumas perguntas e descubra um método comprovado para conquistar seus objetivos
      </motion.p>
    </div>
  );
}