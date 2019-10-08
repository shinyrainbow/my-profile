import React, { Component } from 'react'
import {
  Menu,
  Youtube,
  Github,
  Instagram,
  Gmail,
} from '../../components/Icons'
import{ Route, Link } from 'react-router-dom'
import classnames from 'classnames'
import Slider from '../../components/Slider'
import Portfolio from '../Portfolio'
import About from '../About'
import Contact from '../Contact'
import Lisa from '../../assets/lisa1.png'
import Lisa2 from '../../assets/lisa2.png'
import './index.scss'

const HomeContent = () => {
    // const { open } = this.state  
    console.log('WTFFsdhfklajdsF')
    const menus = ['HOME', 'PORTFOLIO', 'ABOUT ME', 'CONTACT']
    const tos = ['/', '/portfolio', '/aboutme', 'contact']
    const portfolios = ['Onboarding app', 'Template app', 'Chat app', 'Components', 'Todo List', 'Pokemon']
    return (

        <div className='content'>
          {/* <img src={Lisa}/>
          <img src={Lisa2}/> */}
            testtttt iojoihjoihiohioh
          <div className='home-content'>
            <div>KORNKANOK L. a/sjdioiuadsf</div>
            <div className='position'>FRONTEND DEVELOPER</div>
            <div className='button'>ABOUT ME</div>
            <div className='button'>PORTFOLIO</div>
          </div>
          <div className='portfolio'>
            {/* <div>PORTFOLIO</div> */}
            <Slider>
              {
                portfolios.map((item, index) => {
                  return (
                    <div key={index} className='port-app'>
                      <div>
                        {item}
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>

          <div className='piano'>
            <div>I also did some piano cover :D</div>
            <div className='covers'>
              <div className='cover'>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                  width="200px" height="200px" type="text/html"
                  src="https://www.youtube.com/embed/zuzovwrHHyc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode.com/en/</a></small></div><div><small><a href="http://add-link-exchange.com">Add Link Exchange</a></small></div><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode.com/nl/</a></small></div><div><small><a href="http://add-link-exchange.com">add-link-exchange.com</a></small></div></iframe>
              </div>

              <div className='cover'>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                  width="200px" height="200px" type="text/html"
                  src="https://www.youtube.com/embed/shuCp4dSTO4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
              </div>

              <div className='cover'>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                  width="200px" height="200px" type="text/html"
                  src="https://www.youtube.com/embed/8ERqP6wZR_U?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
              </div>

            </div>
          </div>

          <div className='footer'>
            <div>follow me at</div>
            <Github className='icon' />
            <Gmail className='icon' />
            <Youtube className='icon' />
            <Instagram className='icon' />
            <div>Copyright 2019 © Kornkanok L.</div>
          </div>
        </div>
    )
}

export default HomeContent