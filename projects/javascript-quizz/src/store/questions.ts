//Estado global de la aplicación
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Question } from '../types.d'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

//Middleware para loguear los cambios de estado en la consola
const logger =
  <T>(config: (set: any, get: any, api: any) => T) =>
  (set: any, get: any, api: any) =>
    config(
      (...args: any[]) => {
        console.log('applying', args)
        set(...args)
        console.log('new state', get())
      },
      get,
      api
    )

export const useQuestionsStore = create<State>()(
  logger(
    persist(
      (set, get) => {
        return {
          questions: [],
          currentQuestion: 0,

          fetchQuestions: async (limit: number) => {
            // Simulamos una llamada a una API => en mi caso es un archivo local
            const res = await fetch('http://localhost:5173/data.json')
            const json = await res.json()

            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit) // <-- desordena las preguntas y coge des del indice 0 hasta el limite pasado por parametro
            set({ questions }) // <-- actualiza el estado global con las preguntas obtenidas
          },

          selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get() // <-- obtenemos quetions del State
            // Usar structuredClone para clonar el array de preguntas
            const newQuestions = structuredClone(questions)
            // Encontrar el indicde de la pregunta que coincide con questionId
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId
            )
            // Obtenemos la información de la pregunta actual
            const questionInfo = newQuestions[questionIndex]
            // Comparamos el índice de la respuesta seleccionada con la respuesta correcta
            const isCorrectUserAnswer =
              questionInfo.correctAnswer === answerIndex
            // Cambiar esta información en la copia de la pregunta correspondiente
            newQuestions[questionIndex] = {
              ...questionInfo,
              isCorrectUserAnswer,
              userSelectedAnswer: answerIndex,
            }

            // Actualizamos el estado global con las nuevas preguntas
            set({ questions: newQuestions })
          },

          goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const NextQuestion = currentQuestion + 1

            if (NextQuestion < questions.length) {
              set({ currentQuestion: NextQuestion })
            }
          },

          goPreviousQuestion: () => {
            const { currentQuestion } = get()
            const PreviousQuestion = currentQuestion - 1

            if (PreviousQuestion >= 0) {
              set({ currentQuestion: PreviousQuestion })
            }
          },

          reset: () => {
            set({ currentQuestion: 0, questions: [] })
          },
        }
      },
      {
        name: 'questions',
      }
    )
  )
)
