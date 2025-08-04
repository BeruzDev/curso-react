import { Form } from 'react-bootstrap'
import { SectionType } from '../type.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
	if (type === SectionType.From) return 'Enter a text'
	if (loading === true) return 'Translating...'
	return 'Translate'
}

export const TextArea = ({
  type,
  loading,
  value,
  onChange,
}: Props) => {

  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#e0e0e0ff' }
  
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
	}
	
	return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({type, loading})}
      style={styles}
			value={value}
			onChange={handleChange}
    />
  )
}
