import React, { Component } from 'react'
import {
  Menu,
  Youtube,
  Github,
  Instagram,
  Gmail,
} from '../../components/Icons'
import { Route, Link, Switch } from 'react-router-dom'
import classnames from 'classnames'
import Slider from '../../components/Slider'
import HomeContent from '../HomeContent'
import Portfolio from '../Portfolio'
import About from '../About'
import Contact from '../Contact'
import './index.scss'

class Home extends Component {
  state = {
    open: false,
    scroll: false,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleClickOutside)
    console.log('un mountttt')
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { open } = this.state
      if (open) {
        this.setState({
          open: false
        })
      }
    }
  }


  handleScroll = () => {
    if (window.scrollY > 50) {
      console.log('scrollll')
      this.setState({
        scroll: true
      })
    } else {
      this.setState({
        scroll: false
      })
    }
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state
    const menus = ['HOME', 'PORTFOLIO', 'ABOUT ME', 'CONTACT']
    const tos = ['/', '/portfolio', '/aboutme', 'contact']
    const portfolios = ['Onboarding app', 'Template app', 'Chat app', 'Components', 'Todo List', 'Pokemon']
    return (
      <div className='home-wrapper'>
        hi hi
        <div className={(classnames('header', { 'header-scroll': this.state.scroll }))} >
          {
            !open &&
            <Menu className='menu' onClick={this.toggleMenu} />
          }
          {
            open
            &&
            (
              <div
                className='left-menu'
                ref={node => { this.wrapperRef = node }}
              >
                <Link to='/'><div className='item' onClick={this.toggleMenu}>Home</div> </Link>
                <Link to='/portfolio'><div className='item' onClick={this.toggleMenu}>Portfolio</div> </Link>
                <Link to='/aboutme'><div className='item' onClick={this.toggleMenu}>About me</div> </Link>
                <Link to='/contact'><div className='item' onClick={this.toggleMenu}>Contact</div> </Link>
                {/* {
                  menus.map((menu, index) => {
                    return (
                      <Link key={index}
                       to={tos[index]}
                        // className='item' 
                       >
                        {menu}
                      </Link>
                    )
                  })
                } */}
                <div className='icons'>
                <Github className='icon' fill='#ffffff' />
                <Gmail className='icon' fill='#ffffff' />
                <Youtube className='icon' fill='#ffffff' />
                <Instagram className='icon' fill='#ffffff' />
                </div>
                {/* <Switch> */}


                {/* <Route path='/' component={HomeContent} /> */}

                {/* </Switch> */}
              </div>
            )
          }
        <div className='icons-header' >
                <Github className='icon' fill='#ffffff' />
                <Gmail className='icon' fill='#ffffff' />
                <Youtube className='icon' fill='#ffffff' />
                <Instagram className='icon' fill='#ffffff' />
                </div>
        </div>




      </div>
    )
  }
}

export default Home
