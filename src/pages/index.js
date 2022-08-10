import React from 'react'
import '../index.css'

const Home = () => {
  return (
    <div>
      <header className='hero'>
        <div className='hero-txt'>
          <h1>SHIELD</h1>
          <p>We provide the perfect ecosystem for World-Class Security</p>
        </div>
      </header>
      <section className='container'>
        <h2>What is SHIELD?</h2>
        <p>SHIELD is an IoT-based technology that provides a perfect ecosystem for world-class Security at a minimal cost.</p>
      </section>
      <section className='container'>
        <h2>SHIELD solves them all</h2>
        <ul>
          <li>Leaking of exam paper.</li>
          <li>Money looted in between transfers to ATM.</li>
          <li>Expensive and valuable equipments stolen.</li>
          <li>Important documents got plundered.</li>
          <li>Tampering of EVM.</li>
        </ul>
      </section>
      <section className='container'>
        <h2>Why SHIELD?</h2>
        <ul>
          <li>It reduces the human workforce and physical intervention.</li>
          <li>It provides world-class security at a minimal cost.</li>
          <li>The box can be remotely secured form any place.</li>
          <li>If any evil deed or breakage occurs, it can generate notifications to the authorities.</li>
          <li>Live location using GPS tracking.</li>
          <li>Real-time monitoring of the environment.</li>
          <li>If there is no facility of internet, the box will notify via SMS and Phone Call to the registered mobile.</li>
          <li>Wireless charging.</li>
        </ul>
      </section>
      <section className='container'>
        <h2>Out team</h2>
        <div className='team'>
          <div className='profile'>
            <div className='profile-card'>
              <img className='dp' src='' alt='S Harshada' />
              <h3 className='profile-name'>S Harshada</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <img className='dp' src='' alt='Susham' />
              <h3 className='profile-name'>Susham Kumar Pradhan</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <img className='dp' src='' alt='Prateek' />
              <h3 className='profile-name'>Prateek Das</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <img className='dp' src='' alt='Chandrashekhar' />
              <h3 className='profile-name'>Chandrashekhar Tripathi</h3>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home