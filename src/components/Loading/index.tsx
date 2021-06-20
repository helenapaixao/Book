import { useEffect, useState } from 'react'

import Animation from '../Animation'

import * as S from './styles'

export function Loading() {

  const [step, setStep] = useState(0)

  useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 5) return step + 1
        else return 0
      })
    }

    const interval = setInterval(updateStep, 90)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <S.Container>
      <Animation />
    </S.Container>
  )
}
