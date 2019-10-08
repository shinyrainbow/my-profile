/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { omit, isFunction } from 'lodash'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Slider from 'react-slick'
import CircleButton from '../CircleButton'
import {
  Arrow as ArrowIcon,
} from '../Icons'
import './index.scss'


class CommonSlider extends Component {
  static propTypes = {
    className: PropTypes.string,
    settings: PropTypes.object,
    numRemainSlide: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
  }

  static defaultProps = {
    className: '',
    numRemainSlide: 0,
  }

  state = {
    slideIndex: 0,
  }

  beforeSlideChangeHandler = (currentIndex, newIndex) => {
    this.setState({ slideIndex: newIndex })
  }

  countChild = () => React.Children.count(this.props.children)

  goNextSlide = () => {
    this.slider.slickNext()
  }

  goPrevSlide = () => {
    this.slider.slickPrev()
  }

  renderBackArrow = () => {
    const { slideIndex } = this.state
    if (slideIndex > 0) {
      return (
        <CircleButton
          color='#727C8A'
          style={{ display: 'inline-block' }}
          className='back-arrow-wrapper'
          width='40px'
          onClick={this.goPrevSlide}
        >
          <ArrowIcon className='custom-arrow-icon back-arrow' />
        </CircleButton>
      )
    }
    return (
      <CircleButton
        style={{ display: 'inline-block' }}
        className='back-arrow-wrapper'
        color='#727C8A'
        width='40px'
        opacity='0.5'
        disable
      >
        <ArrowIcon className='custom-arrow-icon back-arrow' />
      </CircleButton>
    )
  }

  renderNextArrow = () => {
    const { slideIndex } = this.state
    const { numRemainSlide } = this.props
    if (slideIndex < this.countChild() - numRemainSlide - 1) {
      return (
        <CircleButton
          style={{ display: 'inline-block' }}
          onClick={this.goNextSlide}
          color='#727C8A'
          width='40px'
        >
          <ArrowIcon className='custom-arrow-icon' />
        </CircleButton>
      )
    }
    return (
      <CircleButton
        style={{ display: 'inline-block' }}
        color='#727C8A'
        width='40px'
        opacity='0.5'
        disable
      >
        <ArrowIcon className='custom-arrow-icon' />
      </CircleButton>
    )
  }

//   calculateSlideOpacity = (index) => {
//     const slideLenIndex = this.countChild - 1
//     const { slideIndex } = this.state
//     if (slideIndex === index) {
//       return '1'
//     } else if (slideIndex === 0 && index === slideLenIndex) {
//       return '0'
//     } else if (slideIndex === slideLenIndex && index === 0) {
//       return '0'
//     }
//     return '0.3'
//   }

  render() {
    const {
      children,
      className,
      arrows,
      ...rest
    } = this.props

    const divProps = omit(rest, Object.keys(CommonSlider.propTypes))
    const defaultSettings = {
      draggable: true,
      variableWidth: true,
      slidesToScroll: 2,
      arrows: false,
      infinite: true,
      beforeChange: this.beforeSlideChangeHandler,
    }

    return (
      <div
        className={classnames('common-slider', className)}
        {...divProps}
      >
        <div className='slider-header'>
          <div className='header-text'>
            <div className='title'>
              Application
            </div>
            <div className='sub-title'>
              portfolios
            </div>
          </div>
          <div className='arrows'>
            {this.renderBackArrow()}
            {this.renderNextArrow()}
          </div>
        </div>
        <div>
          <Slider
            ref={(slider) => { this.slider = slider }}
            {...defaultSettings}
          >
            {
              React.Children.map(children, (child, index) => {
                return (
                  <div className='children-wrapper' >
                    <div
                      style={{ 
                        //   opacity: this.calculateSlideOpacity(index),
                         margin: '10px' }}
                    >
                      {child}
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    )
  }
}

export default CommonSlider
