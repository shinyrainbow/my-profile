import React from 'react'
import App1 from '../../assets/App1.png'
import App2 from '../../assets/App2.png'
import './index.scss'

const Portfolio = () => {
  const ports = [
    {
      file: App1,
      url: 'https://onboarding-test-app.herokuapp.com/',
      description: 'This is example app for onboarding new employees.',
    },
    {
      file: App2,
      url: 'https://todolist-complete-test-app.herokuapp.com/',
      description: 'This is Todolist, you can add, edit, remove task',
    }
  ]
  return (
    <div className='portfolios-wrapper'>
      <div className='title'>Portfolios</div>

      <div className='portfolios'>
        {
          ports.map((item, index) => {
            return (
              <div className='port' onClick={() => window.open(item.url)}>

                <img src={item.file} className='port-image' />
                <div className='detail'>
                  {item.description}
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Portfolio
