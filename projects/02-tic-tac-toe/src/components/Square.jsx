<<<<<<< HEAD
export const Square = ({ children, isSelected, updateBoard, index }) => {
=======
import React from 'react'

const Square = ({ children, isSelected, updateBoard, index }) => {
>>>>>>> clase-2
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
<<<<<<< HEAD
    <div onClick={handleClick} className={className}>
=======
    <div className={className} onClick={handleClick}>
>>>>>>> clase-2
      {children}
    </div>
  )
}
<<<<<<< HEAD
=======

export default Square
>>>>>>> clase-2
