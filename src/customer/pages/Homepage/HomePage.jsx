import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import Homesectioncarosel from '../../components/HomesectionCarosel/Homesectioncarosel'

const HomePage = () => {
  return (
    <>
    <div>
     <MainCarousel/>
    </div>
    
    <div className='space-y-10 py-20 flex flex-col justify-center'>
      <Homesectioncarosel/>
      <Homesectioncarosel/>
      <Homesectioncarosel/>
      <Homesectioncarosel/>
      <Homesectioncarosel/>
    </div>
    </>
  )
}

export default HomePage
