import kinematics from '@/content/quiz/kinematics.json'
import newtonsLaw from '@/content/quiz/newtons-law.json'
import random from '@/content/quiz/random.json'

const quizzes = {
  'kinematics': {
    name: 'Kinematics',
    questions: kinematics,
  },
  'newtons-law': {
    name: 'Newton\'s Law',
    questions: newtonsLaw,
  },
  'random': {
    name: 'Random',
    questions: random,
  },
}

export default quizzes
