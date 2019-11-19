import React from 'react'
import App1 from '../../assets/App1.png'
import App2 from '../../assets/App2.png'
import './index.scss'

const Portfolio = () => {
  console.log('testttt 7777')
  const ports = [
    {
      file: 'App1',
      description: 'This is example app for onboarding new employees.',
    },
    {
      file: 'App2',
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
              <div className='port'>

                <img src={item.file} />
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
