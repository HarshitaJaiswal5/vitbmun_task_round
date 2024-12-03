import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import Cards from './Cards'

const About = () => {
    const card_info = [
        {
            number: 5,
            text: "years of experience"
        },
        {
            number: 100,
            text: "dedicated members"
        },
        {
            number: 500,
            text: "successful conferences"
        }
    ]
    return (
       <>
        <div className='h-screen py-12 px-20 gap-24 flex flex-row justify-center items-center'>

<div className='gap-10 flex flex-col w-1/2'>
    <h1 className='text-6xl'>About Us </h1>
    <p>
        Experience the essence of global diplomacy at Vit Bhopal Model United Nations, where every delegate is encouraged to express their perspectives. Guided by a dedicated team, we specialize in simulating real-world UN scenarios, from engaging debates to collaborative resolutions. Our mission goes beyond mere participation; we aim to cultivate informed global citizens who are ready to make a difference. Join us in exploring the complexities of international relations and the importance of dialogue.
    </p>
    <hr className='border-[#16c5d7] mx-5' />
    <div className='count_section  flex   justify-between items-center'>
        {card_info.map((card, index) => (
            <Cards
                key={index}
                number={card.number}
                text={card.text}
            />
        ))}
    </div>
</div>

<div className="relative  h-[95%] border flex justify-center items-center">
    <img
        src="/about_grid.png"
        alt=""
        className="w-full h-4/5"
    />
    <img
        src="/schiba-qkWOI6b2p5w-unsplash.jpg"
        alt=""
        className="absolute w-3/4 h-[95%] z-1000 rounded-t-full left-[15%] "
    />
</div>



</div>

       </>
    )
}

export default About
