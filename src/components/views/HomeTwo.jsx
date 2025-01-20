import React from 'react'
import Description from '../common/Description'
import Footer from '../common/Footer'
import { PracticeEmail } from '../PracticeEmail'
import UseStatePractice from '../UseStatePractice'

const HomeTwo = () => {
  return (
    <>
      <PracticeEmail />
      <UseStatePractice/>
      <Description text="Lorem Two" style="text-green-500" />
      <Footer />
    </>
  )
}

export default HomeTwo