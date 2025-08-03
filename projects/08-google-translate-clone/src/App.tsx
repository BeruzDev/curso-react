import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { SwitchIcon } from './components/Icons.tsx'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './type.d'
import { TextArea } from './components/TextArea.tsx'
import { useEffect } from 'react'
import { translate } from './services/translate.ts'

function App() {
  const {
    fromLanguage,
    fromText,
    toLanguage,
    result,
    loading,
    setFromLanguage,
    setFromText,
    setToLanguage,
    setResult,
    interchangeLanguages,
  } = useStore()

  useEffect(() => {
    if (fromText === '') return
    translate({ fromLanguage, toLanguage, text: fromText })
      .then(setResult)
      .catch(() => {
        setResult('Error')
      })
  }, [fromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h2>Google translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguages()
            }}
          >
            <SwitchIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
