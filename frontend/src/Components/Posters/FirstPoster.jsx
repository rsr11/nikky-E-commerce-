import React from 'react'
import FirstCover from "../../Assets/coverImg/FirstCover.mp4";

const FirstPoster = () => {
  return (
      <video autoPlay loop muted className='mt-6 lg:h-[70vh] w-fit mx-auto rounded-xl'  >
        <source src={FirstCover} />
      </video>
  )
}

export default FirstPoster
