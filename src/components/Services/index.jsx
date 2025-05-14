import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
                I transform your ideas, and consequently your desires, into a 
               distinctive web project that both inspires you and captivates your customers.
            </p>
          </div>

          <div className="services__group">
            <article className="service">
              <div className="service__top">
                <div className="icon__container">
                  <FaPaintBrush className="icon"/>
                </div>
                <h3 className="title">UI/UX Design</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Hi, I’m Vijayakumar, a passionate UI/UX designer eager to craft intuitive and visually appealing digital experiences.
                As a fresher in the field, I bring a creative mindset, strong design fundamentals, 
                and a user-centered approach to solving problems.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End ui/ux */}


            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Web Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Hello! I'm Vijayakumar, a passionate and detail-oriented web developer with a strong foundation in front-end and back-end technologies. As a recent graduate in M.sc InformationTechnology, I’ve built a variety of academic and personal projects that showcase my skills in building responsive, functional, and user-friendly websites and web apps.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End Web development */}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <TfiWrite className="icon"/>
                </div>
                <h3 className="title">Content Creation</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Hey there! I'm Vijayakumar, an enthusiastic and creative content creator passionate about storytelling, digital trends, and creating engaging content that connects with audiences. As a fresher, I bring fresh ideas, a strong work ethic, and a growing skillset in content writing, social media management, and visual content creation.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End content creation */}
          </div>
       </div>
    </section>
  )
}

export default Services
