import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { questions } from '../data/questions';
import { QuizState } from '../types/quiz';
import QuizOption from './QuizOption';
import ProgressBar from './ProgressBar';
import QuizHeader from './QuizHeader';
import { Gift, ChefHat, DollarSign, Trophy } from 'lucide-react';

const LANDING_PAGE_URL = 'https://guia-financeiro-para-comprar-um-ps5.netlify.app/';

const stageIcons = {
  engagement: Gift,
  problem: DollarSign,
  desire: Gift,
  solution: ChefHat,
  action: Trophy,
};

const stageColors = {
  engagement: 'bg-blue-100 text-blue-500',
  problem: 'bg-red-100 text-red-500',
  desire: 'bg-purple-100 text-purple-500',
  solution: 'bg-green-100 text-green-500',
  action: 'bg-yellow-100 text-yellow-500',
};

export default function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
    showConfetti: false
  });

  const currentQuestion = questions[state.currentQuestionIndex];
  const StageIcon = stageIcons[currentQuestion.stage];
  const stageColor = stageColors[currentQuestion.stage];

  const handleOptionSelect = (option: string) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: option
      }
    }));
  };

  const handleNext = () => {
    if (state.currentQuestionIndex === questions.length - 1) {
      setState(prev => ({ 
        ...prev, 
        isComplete: true,
        showConfetti: true 
      }));
      
      // Show confetti for 2.5 seconds before redirecting
      setTimeout(() => {
        window.location.href = LANDING_PAGE_URL;
      }, 2500);
      
      return;
    }

    setState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1
    }));
  };

  const selectedOption = state.answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4 relative overflow-hidden">
      {state.showConfetti && <Confetti />}
      
      <div className="max-w-2xl mx-auto">
        <QuizHeader 
          currentQuestion={state.currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        <ProgressBar 
          current={state.currentQuestionIndex + 1} 
          total={questions.length} 
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mt-8"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full ${stageColor} flex items-center justify-center mt-1 shrink-0`}>
                <StageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  text={option}
                  isSelected={selectedOption === option}
                  onClick={() => handleOptionSelect(option)}
                  stage={currentQuestion.stage}
                />
              ))}
            </div>

            {selectedOption && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                {state.currentQuestionIndex === questions.length - 1 
                  ? 'Ver Resultado Personalizado' 
                  : 'Próxima Pergunta'}
              </motion.button>
            )}

            <div className="mt-6 text-center text-sm text-gray-500">
              Pergunta {state.currentQuestionIndex + 1} de {questions.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}