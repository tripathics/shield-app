import React from 'react'
import '../scss/box.scss'

const Box = () => {
  return (
    <div className='Box'>
      <section className='hero'>
        <section className='container'>
          <div className='heading'>
            <h1>CBSE Center 1</h1>
            <div className='hero-status'>Active <div className='indicator active' /> </div>
          </div>
          <div className='box-details'>
            <ul>
              <li>Lock status: Locked</li>
              <li>Last update: <time>Thu, Aug 25 - 09:13</time></li>
            </ul>
          </div>
        </section>
      </section>
      <section className='container'>
        <div className='tracker'>
          
        </div>
      </section>
    </div>
  )
}

export default Box