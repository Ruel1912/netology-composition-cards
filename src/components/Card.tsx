import { FC, ReactNode } from 'react'

interface CardProps {
  image?: {
    src: string
    alt: string
  }
  title: string
  children?: ReactNode
}

const Card: FC<CardProps> = ({ image, title, children }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      {image && (
        <figure>
          <img src={image.src} alt={image.alt} />
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Card
