import express from 'express'
import cors from 'cors'
import {translate} from './translate.ts'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/translate', async (req, res) => {
  const { text, fromLanguage, toLanguage } = req.body

  if (!text || !toLanguage) {
    return res.status(400).json({ error: 'Miss parameters text or to' })
  }

  try {
    const translatedText = await translate({ text, fromLanguage, toLanguage })
    return res.json({ translatedText })
  } catch (error) {
    console.error('❌ Error al traducir:', error);
    return res.status(500).json({ error: 'Error al traducir' })
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
