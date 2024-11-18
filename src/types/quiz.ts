export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  stage: 'engagement' | 'problem' | 'desire' | 'solution' | 'action';
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isComplete: boolean;
  showConfetti: boolean;
}