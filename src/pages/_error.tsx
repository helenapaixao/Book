import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/animation/error_404.json'

const FourOnFour: React.FC = () => {
  const [autoplay] = useState(false)
  const [loop] = useState(true)
  const [direction] = useState(1)

  return (
    <Lottie
      options={{
        loop,
        autoplay,
        animationData
      }}
      direction={direction}
    />
  )
}

export default FourOnFour
