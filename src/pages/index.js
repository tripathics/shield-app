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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias eaque pariatur quibusdam.</p>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure.</p>
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
      {/* scroll */}
      <section className='container'>
        <h2>Why SHIELD?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure.</p>
        <div className='scroll-wrapper'>
          <div className='scroll-cards'>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            <div className='card'>
              <div className='img-wrapper'>
                <img src={require('../assets/bilal-mansuri-wH4cOMtOkNU-unsplash.jpg')} alt='decoration'/>
              </div>
              <h3>Reduce humans in the workforce</h3>
              <p>It reduces the human workforce and physical intervention.</p>
            </div>
            
            
          </div>
        </div>
      </section>
      <section className='container'>
        <h2>Our team</h2>
        <p>Team Revolutionists!</p>
        <div className='team'>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/harshada.jpeg')} alt='S Harshada' />
              </div>
              <h3 className='profile-name'>S Harshada</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/susham.jpeg')} alt='Susham' />
              </div>
              <h3 className='profile-name'>Susham Kumar Pradhan</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/prateek.jpeg')} alt='Prateek' />
              </div>
              <h3 className='profile-name'>Prateek Das</h3>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/chandrashekhar.jpeg')} alt='Chandrashekhar' />
              </div>
              <h3 className='profile-name'>Chandrashekhar Tripathi</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home