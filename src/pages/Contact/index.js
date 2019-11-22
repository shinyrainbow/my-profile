import React from 'react'
import './index.scss'

const Contact = () => {
  return (
    <div className='contact-wrapper'>

      <div className='title'>Contact me</div>

      <div className='contact-box'>
        <form action="mailto:kornkanok.lieng@gmail.com" method="post" enctype="text/plain">
          <div className='form-field'>
            <input type="text" name="name" placeholder='Enter your name' />
          </div>
          <div className='form-field'>
            <input type="text" name="mail" placeholder='Enter your e-mail' />
          </div>
            <input type="submit" value="Send me an e-mail" />
        </form>


       
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

      </div>

    </div>
  )
}

export default Contact
