import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors()) 
app.use(express.json()) 

app.post('/translate', async (req, res) => {
  const {text, fromLanguage, toLanguage} = req.body

  if(!text || !toLanguage){
    return res.status(400).json({error: 'Miss parameters text or to'})
  }

  
  try {
    const translatedText = `Traducción de "${text}" a ${toLanguage}`;

    return res.json({ translatedText });
  } catch (error) {
    return res.status(500).json({ error: 'Error al traducir' });
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
