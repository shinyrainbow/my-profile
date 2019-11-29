import React from 'react'
import './index.scss'

const About = () => {
  const info = `Hello, my name is Aoy (Kornkanok Liengsaengthong).
  I am a Frontend developer at 30secondstofly, Bangkok, Thailand.
I have experience in web application development since 2018.
And I am self-taught how to develop website since 2016.`
  const education = `Bachelor of Science, Chulalongkorn University, Bangkok, Thailand
Department of Mathematics, Computer Science.`

  return (
    <div className='about-wrapper'>
      <div className='section-one'>
        <div className='info'>
          <div className='title'>
            About me
          </div>{info}</div>
      </div>
      <div className='section-two'>
        <div className='skill'>
          <ul>
            <li>HTML5</li>
            <li>CSS3 (scss, sass)</li>
            <li>Javascript</li>
            <li>React js</li>
            <li>Redux</li>
            <li>SEO</li>
          </ul>
        </div>
        <div className='experience'>
          <ul>
            <li>Participate in CU Startup club, Hackaton</li>
            <li>Internship at 24Framwork</li>
            <li>Work as a Quality Assurance Engineer at Agoda</li>
            <li>Work as a Frontend developer at Scale360solutions</li>
            <li>Work as a Frontend developer at 30secondstofly</li>
          </ul>
        </div>
      </div>
      <div className='section-three'>
        <div>
          <div className='education'><div className='title'>Education</div>{education}</div>
        </div>
      </div>
    </div>
  )
}

export default About
