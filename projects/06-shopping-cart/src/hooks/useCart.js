import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
	const context = useContext(CartContext)

	if(context === undefined){
		console.log('useCart must be used within a CartProvider')
	}

	return context
}