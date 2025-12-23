import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <article className="border rounded-md p-4 shadow-sm">
      <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">Image</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </article>
  )
}

export default Card
