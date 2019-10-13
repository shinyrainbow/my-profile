import React from 'react'
import './index.scss'

const Contact = () => {
  return (
    <div className='contact-wrapper'>

      <div className='title'>Contact me</div>


      <div className='contact-box'>
        <div className='form-field'>
          <input name='name' placeholder='Enter your name'/>
        </div>
        <div className='form-field'>
          <input name='email' placeholder='enter your email'/>
        </div>
        <div className='form-field'>
          <textarea />
        </div>
      </div>


      <div className='contact-info'>
        <div className='info'>
          Tel: 090-979-1689
        </div>
        <div className='info'>
          E-mail: kornkanok.lieng@gmail.com
        </div>
        <div className='info'>
          Bangkok, Thailand
        </div>
        {/* <div className='info'>

        </div>
        <div className='info'>
          090-979-1689
        </div> */}
      </div>

    </div>
  )
}

export default Contact
