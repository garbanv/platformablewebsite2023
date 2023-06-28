import React from 'react'
import styles from '@/styles/Homepage.module.css'
import VerticalDescriptionCard from '../VerticalDescriptionCard'
const sectorsList = [
  {
    vertical_description_card_title: 'Open Ecosystem',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
  {
    vertical_description_card_title: 'Open Banking & Open Finance',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
  {
    vertical_description_card_title: 'Open Health',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
]
export default function Explore() {
  
  return (
    <section id={styles.section_explore} className='py-10'>
      <div className='flex gap-10  mb-10'>
        <img src='' alt="plat logo" width={100}/>
        <h2 className='text-white font-bold font-karla '>Explore all sectors</h2>
      </div>
      <div className='px-32'>
        <div id={styles.cards_group} className=' grid  grid-cols-3  xl:gap-10'>
          {
            sectorsList?.map((sector, i) => (
              <VerticalDescriptionCard sector={sector} key={i} position={i+1}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
