import { useFilter } from '../hooks/useFilter'
import './Footer.css'

const Footer = () => {
  const {filters} = useFilter()

  return (
    <footer className="footer">
		{
			JSON.stringify(filters, null, 2)
		}
      {/* <h4>
        React Technical Proof - <span>BeruzDev</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5> */}
    </footer>
  )
}

export default Footer
