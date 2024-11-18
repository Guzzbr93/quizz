import { QuizQuestion } from '../types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "Que tipo de presente você gostaria de dar para alguém especial (ou para você mesmo)?",
    options: [
      "Uma viagem inesquecível",
      "Um console de videogame de última geração",
      "Um jantar gourmet preparado por você",
      "Um item de moda exclusivo"
    ],
    stage: 'engagement'
  },
  {
    id: 2,
    text: "Qual é o seu maior desafio atualmente para realizar esse sonho?",
    options: [
      "Falta de tempo para me dedicar a um novo projeto",
      "Dificuldade em encontrar uma fonte de renda extra que se encaixe na minha rotina",
      "Insegurança em relação às minhas habilidades culinárias",
      "Falta de conhecimento sobre como vender produtos gourmets"
    ],
    stage: 'problem'
  },
  {
    id: 3,
    text: "Você já tentou outras formas de ganhar dinheiro extra, mas sem sucesso?",
    options: [
      "Sim, já tentei várias coisas, mas nada parece funcionar para mim",
      "Sim, mas acabo desistindo por falta de tempo ou motivação",
      "Não, nunca tentei, mas estou aberto a novas ideias",
      "Não, estou satisfeito com minha renda atual"
    ],
    stage: 'problem'
  },
  {
    id: 4,
    text: "Imagine a alegria de poder presentear alguém especial com um PS5 ou realizar o seu próprio sonho de ter um! Como você se sentiria?",
    options: [
      "Extremamente feliz e realizado, seria a realização de um grande sonho",
      "Aliviado por finalmente ter conseguido alcançar esse objetivo",
      "Grato por poder proporcionar essa alegria a alguém querido",
      "Motivado a continuar buscando meus objetivos"
    ],
    stage: 'desire'
  },
  {
    id: 5,
    text: "Você gostaria de ter acesso a um método comprovado que te ajudasse a ganhar dinheiro extra de forma fácil e prazerosa, sem sair de casa?",
    options: [
      "Sim, com certeza! Seria a solução perfeita para realizar meu sonho",
      "Sim, desde que fosse algo que realmente funcionasse",
      "Talvez, depende do tipo de método",
      "Não, prefiro outras formas de ganhar dinheiro"
    ],
    stage: 'desire'
  },
  {
    id: 6,
    text: "Você sabia que é possível transformar sua paixão por culinária em uma fonte de renda lucrativa, capaz de te ajudar a comprar o tão sonhado PS5?",
    options: [
      "Sim, já ouvi falar sobre isso e tenho interesse em aprender mais",
      "Não, mas parece interessante! Gostaria de saber mais",
      "Talvez, depende do tipo de culinária e do investimento necessário",
      "Não, não acredito que seja possível ganhar dinheiro com culinária"
    ],
    stage: 'solution'
  },
  {
    id: 7,
    text: "O que você acha da ideia de aprender receitas gourmets fáceis e lucrativas, que você pode preparar em casa e vender para amigos, familiares e até mesmo online?",
    options: [
      "Adorei a ideia! Parece ser uma ótima forma de ganhar dinheiro extra",
      "Parece interessante, gostaria de saber mais sobre as receitas",
      "Tenho algumas dúvidas, como por exemplo, a questão da precificação e da divulgação",
      "Não me interesso por culinária"
    ],
    stage: 'solution'
  },
  {
    id: 8,
    text: "Você gostaria de conhecer um ebook completo com receitas gourmets testadas e aprovadas, além de dicas de marketing para aumentar suas vendas e te ajudar a alcançar seu objetivo de comprar o PS5?",
    options: [
      "Sim, com certeza! Quero saber mais sobre esse ebook",
      "Talvez, preciso saber mais sobre o conteúdo e o preço",
      "Não tenho certeza, preciso pensar melhor",
      "Não, não me interesso por esse tipo de solução"
    ],
    stage: 'solution'
  },
  {
    id: 9,
    text: "Qual tipo de culinária gourmet te atrai mais?",
    options: [
      "Doces e sobremesas",
      "Salgados e petiscos",
      "Pratos principais",
      "Todos os tipos"
    ],
    stage: 'action'
  },
  {
    id: 10,
    text: "Você prefere receitas simples e rápidas ou está disposto a se dedicar a preparos mais elaborados?",
    options: [
      "Simples e rápidas, que eu possa fazer no dia a dia",
      "Mais elaboradas, para ocasiões especiais",
      "Um pouco de cada"
    ],
    stage: 'action'
  },
  {
    id: 11,
    text: "Você se considera uma pessoa organizada e disciplinada para seguir um plano de vendas?",
    options: [
      "Sim, sou bastante organizado e dedicado",
      "Mais ou menos, preciso de um pouco de ajuda para me organizar",
      "Não, tenho dificuldades em seguir planos"
    ],
    stage: 'action'
  }
];