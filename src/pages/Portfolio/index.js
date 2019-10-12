import React from 'react'
import './index.scss'

const Portfolio = () => {

  const ports = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className='portfolios-wrapper'>
      <div className='title'>Portfolios</div>
      
    <div className='portfolios'>
        {
          ports.map((item, index) => {
            return (
              <div className='port'>
                
                port
                <div className='detail'>
                  hahahhaa
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