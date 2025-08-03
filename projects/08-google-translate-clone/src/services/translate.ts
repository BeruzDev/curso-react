import type { FromLanguage, Language } from '../type.d'

interface Props {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}

export async function translate({ fromLanguage, toLanguage, text }: Props) {
  const res = await fetch('http://localhost:3001/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fromLanguage,
      toLanguage,
      text
    })
  })

  if (!res.ok) throw new Error('Error al traducir')

  const data = await res.json()
  return data.translatedText
}
