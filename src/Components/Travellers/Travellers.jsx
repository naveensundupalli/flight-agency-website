import React,{useEffect} from 'react'

import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import newyork from '../../assets/new york.jpg'
import london from '../../assets/london.jpg'


import traveller1 from '../../assets/traveller1.jpg'
import traveller2 from '../../assets/traveller2.jpg'
import traveller3 from '../../assets/traveller3.jpg'
import traveller4 from '../../assets/traveller4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travellers = [
  {
    id:1,
    destinationImage:paris,
    travellerImage: traveller1,
    travellerName:'Naveen',
    socialLink:'@naveensundupalli',
  },
  {
    id:2,
    destinationImage:dubai,
    travellerImage: traveller2,
    travellerName:'Pramod',
    socialLink:'@pramodJain',
  },
  {
    id:3,
    destinationImage:newyork,
    travellerImage: traveller3,
    travellerName:'Sharan',
    socialLink:'@sharanaBasava',
  },
  {
    id:4,
    destinationImage:london,
    travellerImage: traveller4,
    travellerName:'lokesh',
    socialLink:'@lokeshManneti',
  }
]

const Travellers = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='travellers container section'>

      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500' >
          Top travellers of this month!
        </h2>

        <div className='travellersContainer grid'>

          {
            travellers.map(({id, destinationImage, travellerImage,travellerName, socialLink })=>{
              return(
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className='singleTraveller'>

                 <img src={destinationImage} className='destinationImage'/>

                  <div className='travellerDetails'>
                   <div className='travellerPicture'>
                    <img src={travellerImage} className='travellerImage'/>
                  </div>
                  <div className='travellerName'>
                    <span>{travellerName}</span>
                    <p>{socialLink}</p>
                 </div>
                </div>

          </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  )
}

export default Travellers;