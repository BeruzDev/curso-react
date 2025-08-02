import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { SwitchIcon } from './components/Icons.tsx'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './type.d'
import { TextArea } from './components/TextArea.tsx'

function App() {
  const {
    fromLanguage,
    fromText,
    toLanguage,
    result,
    setFromLanguage,
    setFromText,
    setToLanguage,
    setResult,
    interchangeLanguages,
  } = useStore()

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

        <Col xs='auto'>
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
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
