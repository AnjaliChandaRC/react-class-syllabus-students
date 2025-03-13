import React, { useEffect } from 'react'
import Description from '../common/Description'
import Footer from '../common/Footer'
import { PracticeEmail } from '../PracticeEmail'
import UseStatePractice from '../UseStatePractice'
import { useNavigate } from 'react-router-dom'

const HomeTwo = () => {

  const router = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("isLogin") != ("true")) {
      router("/form")
    }
  }, [])

  return (
    <>
      <PracticeEmail />
      <UseStatePractice />
      <h2 className='text-3xl font-bold pt-10 pb-5'>Props</h2>
      <Description text="Lorem Two" style="text-green-500" />
      <Footer />
    </>
  )
}

export default HomeTwo