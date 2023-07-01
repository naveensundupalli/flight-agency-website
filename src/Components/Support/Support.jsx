import React,{useEffect} from 'react'

import gridImage1 from '../../assets/grid1.jpg'
import gridImage2 from '../../assets/grid2.jpg'
import gridImage3 from '../../assets/grid3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
         
         <div className='tittlesDiv'>
            <small>Travel Support</small>
            <h2>Plan your travel with confidence</h2>
            <p>Find help booking and travel plans,see what to expect along the journey!</p>
         </div>

         <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div data-aos='fade-down' data-aos-duration='2500' className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help booking and travel plans,
              see what to expect along the journey 
               to your favourite destinations</p>
            </div>
          </div>
         </div>

         <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div data-aos='fade-down' data-aos-duration='3500' className='singleInfo'>
              <span className='number colorOne'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help booking and travel plans,
              see what to expect along the journey
               to your favourite destinations</p>
            </div>
          </div>
         </div>

         <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div data-aos='fade-down' data-aos-duration='4500' className='singleInfo'>
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help booking and travel plans,
              see what to expect along the journey
               to your favourite destinations</p>
            </div>
          </div>
         </div>
        
        <div data-aos='fade-right' data-aos-duration='2500' className='imgDivider'>
      
          <div className='imgDiv img1'>
            <img src={gridImage1} />
          </div>

          <div className='imgDiv img2'>
            <img src={gridImage2} />
          </div>

          <div className='imgDiv img3'>
            <img src={gridImage3} />
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Support;
