//import { IconButton, Stack } from "@mui/material"
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  IconButton,
} from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useQuestionsStore } from './store/questions'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { type Question as QuestionType } from './types.d'
import Footer from './Footer'

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info

    // Si el usuario no ha seleccionado nada, todo transparente
    if (userSelectedAnswer === undefined) return 'transparent'

    // Si esta es la respuesta correcta, siempre verde
    if (index === correctAnswer) return 'green'

    // Si esta es la respuesta que seleccionó el usuario Y está incorrecta, roja
    if (index === userSelectedAnswer && userSelectedAnswer !== correctAnswer)
      return 'red'

    // Todo lo demás transparente
    return 'transparent'
  }

  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'left',
        p: 2,
        bgcolor: '#242424',
        borderRadius: '8px',
        marginTop: 4,
      }}
    >
      <Typography variant="h5" sx={{ p: 2 }}>
        {info.question}
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ borderRadius: '6px' }}
      >
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333', borderRadius: '6px' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem
            key={index}
            disablePadding
            divider={index !== info.answers.length - 1}
          >
            <ListItemButton
              disabled={info.userSelectedAnswer !== undefined}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(index) }}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

const Game = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 4 }}
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
			<Footer />
    </>
  )
}

export default Game
