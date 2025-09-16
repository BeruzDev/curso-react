import { useQuestionsData } from './hooks/useQuestionsData'

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>
        {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}{' '}
      </strong>
    </footer>
  )
}

export default Footer
