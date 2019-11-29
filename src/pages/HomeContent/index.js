import React, { Component } from 'react'
import {
  Menu,
  Youtube,
  Github,
  Instagram,
  Gmail,
} from '../../components/Icons'
import { Route, Link } from 'react-router-dom'
import classnames from 'classnames'
import App1 from '../../assets/App1.png'
import App2 from '../../assets/App2.png'
import Slider from '../../components/Slider'
import Portfolio from '../Portfolio'
import About from '../About'
import Contact from '../Contact'
import Lisa from '../../assets/lisa1.png'
import Lisa2 from '../../assets/lisa2.png'
import './index.scss'

const HomeContent = () => {
  const menus = ['HOME', 'PORTFOLIO', 'ABOUT ME', 'CONTACT']
  const tos = ['/', '/portfolio', '/aboutme', 'contact']
  const portfolios = [
    { file: App1, name: 'Onboarding app', url: 'https://onboarding-test-app.herokuapp.com/' },
    // 'Template app', 
    // 'Chat app',
    //  'Components',
    { file: App2, name: 'Todo List', url: 'https://todolist-complete-test-app.herokuapp.com/' }
  ]
  return (

    <div className='content'>

      <div className='home-content'>
        <div className='home-text'>

          <div>Kornkanok L.</div>
          <div className='position'>Frontend Developer</div>
          <div className='about-me' >
            <Link to='/aboutme'>ABOUT ME</Link>
          </div>
          <div className='button'>
            <Link to='/portfolio'>PORTFOLIO</Link>
          </div>
        </div>
      </div>
      <div className='port-wrapper'>
        <div className='portfolio'>
          <div>Here are some of my applications </div>
          <Slider>
            {
              portfolios.map((item, index) => {
                return (
                  <div key={index} className='port-app' onClick={() => window.open(item.url)}>
                    <div>
                      {item.name}
                    </div>
                    <div>
                      <img src={item.file} width='100%' />
                    </div>
                  </div>
                )
              })
            }

          </Slider>
          {/* <div className ='button'><Link to='/portfolio'>See all my portfolio</Link></div> */}
        </div>
      </div>
      <div className='piano'>
        <div className='piano-text'>I also have some piano cover :D</div>
        <div className='covers'>
          <div className='cover'>
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
              width="350px" height="200px" type="text/html"
              src="https://www.youtube.com/embed/zuzovwrHHyc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode.com/en/</a></small></div><div><small><a href="http://add-link-exchange.com">Add Link Exchange</a></small></div><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode.com/nl/</a></small></div><div><small><a href="http://add-link-exchange.com">add-link-exchange.com</a></small></div></iframe>
          </div>

          <div className='cover'>
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
              width="350px" height="200px" type="text/html"
              src="https://www.youtube.com/embed/8ERqP6wZR_U?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
          </div>

        </div>
      </div>

      <div className='footer'>
        <div className='follows'>follow me at</div>
        <div className='icons'>
        <a href='https://github.com/shinyrainbow?tab=repositories'><Github className='icon' fill='#000000' /></a>
          <a href='mailto:kornkanok.lieng@gmail.com'><Gmail className='icon' fill='#000000' /></a>
          <a href='https://www.youtube.com/channel/UClIaSr8ht7HEwAU_4MoZxlQ'><Youtube className='icon' fill='#000000' /></a>
          <a href='https://www.instagram.com/aoyy_k/'><Instagram className='icon' fill='#000000' /></a>
        </div>
        <div>Copyright 2019 © Kornkanok L.</div>
      </div>
    </div >
  )
}

export default HomeContent
