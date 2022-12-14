import React from 'react'
// import '../index.css'
import '../scss/index.scss'

const CarouselCard = (props) => {
  const {imgsrc, title, subtitle, id, className} = props
  return (
    <div className={`carousel-card ${className}`} id={id}>
      <div className='img-wrapper'>
        <img src={`./media/cases/${imgsrc}`} alt='decoration' />
      </div>
      <div className='card-desc'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

const Carousel = () => {
  const cards = [
    {
      imgsrc: "locate-anywhere.jpg",
      title: 'Track it from anywhere',
      subtitle: 'The box comes with inbuilt GPS to track it in realtime.' 
    },
    {
      imgsrc: "notification.jpg",
      title: 'Get notified via SMS and phone call',
      subtitle: 'In places with poor or no internet connectivity, the box can notify via SMS and phone call to the registered mobile.' 
    },
    {
      imgsrc: "wireless.jpg",
      title: 'Wireless charging',
      subtitle: 'Wireless charging comes built in the box to easily recharge the battery during transportation.' 
    },
    {
      imgsrc: "secure-from-anywhere.jpg",
      title: 'Secure from any place',
      subtitle: 'The box can be remotely secured from any place.' 
    },
    {
      imgsrc: "minimal-cost.jpg",
      title: 'Minimal cost',
      subtitle: 'It provides world-class security at a minimal cost.' 
    },
    {
      imgsrc: "less-humans.jpg",
      title: 'Less humans',
      subtitle: 'It reduces the human workforce and physical intervention.' 
    },
    {
      imgsrc: "tamper-proofing-final.png",
      title: 'Tamper proof',
      subtitle: 'If any evil deed or breakage occurs, it can generate notifications to the authorities..' 
    },
  ]

  const cardsComponent = cards.map((card, i) => {
    const id = `carouselCard${(i+4)%7}`;
    if (id === 'carouselCard0') {
      return <CarouselCard key={i} id={id} className="active-card" imgsrc={card.imgsrc} title={card.title} subtitle={card.subtitle} />
    }
    else {
      return <CarouselCard key={i} id={id} className="" imgsrc={card.imgsrc} title={card.title} subtitle={card.subtitle} />
    }
  })

  const carouselSlide = (direction) => {
    const active = document.getElementsByClassName('active-card');
    if (active.length !== 0) {
      let activeId = active[0].id
      let intId = parseInt(activeId.slice(12, activeId.length));
      document.getElementById(activeId).classList.toggle('active-card');

      // select all cards
      let cardsContainer = document.getElementById('carouselCards');

      if (direction === 'right') {
        cardsContainer.classList.add('move-right');
      } else if (direction === 'left') {
        cardsContainer.classList.add('move-left');
      }

      setTimeout(() => {
        let nextId;
        if (direction === 'right') {
          cardsContainer.classList.remove('move-right');

          nextId = `carouselCard${(intId + 1)%7}`;
          cardsContainer.appendChild(
            cardsContainer.removeChild(cardsContainer.firstChild)
          ); 
        }
        else if (direction === 'left') {
          cardsContainer.classList.remove('move-left');
          
          nextId = `carouselCard${(7 + intId - 1)%7}`;
          cardsContainer.prepend(
            cardsContainer.removeChild(cardsContainer.lastChild)
          );
        }
        let next = document.getElementById(nextId);
        next.classList.toggle('active-card');

        console.log('timeout');
      }, 700);
    }
  }

  return (
    <div className='scroll-wrapper'>
      <div className='carousel-container'>
        <div className='explore'></div>
        <div className='carousel-scroll-btns'>
          <button id='carouselSliderLeft' className='carousel-slider' onClick={() => carouselSlide('left')}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="39.5" stroke="#5B5ED5"/>
              <line x1="59.071" y1="40.071" x2="23.071" y2="40.071" stroke="#5B5ED5" strokeWidth="2"/>
              <line x1="28.6014" y1="33.5303" x2="21.5303" y2="40.6014" stroke="#5B5ED5" strokeWidth="1.5"/>
              <line x1="28.5407" y1="46.6014" x2="21.4696" y2="39.5303" stroke="#5B5ED5" strokeWidth="1.5"/>
            </svg>
          </button>
          <button id='carouselSliderRight' className='carousel-slider' onClick={() => carouselSlide('right')}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="39.5" stroke="#5B5ED5"/>
              <line x1="21" y1="40" x2="57" y2="40" stroke="#5B5ED5" strokeWidth="2"/>
              <line x1="51.4697" y1="46.5407" x2="58.5407" y2="39.4696" stroke="#5B5ED5" strokeWidth="1.5"/>
              <line x1="51.5303" y1="33.4697" x2="58.6014" y2="40.5407" stroke="#5B5ED5" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        <div id='carouselCards' className='scroll-cards'>
          {cardsComponent}
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const highlightDesc = (descId) => {
    console.log('inside highlightDesc');
    let hlDesc = document.getElementById(descId);
    let gDesc = document.getElementById('gDesc');

    console.log(hlDesc)
    console.log(gDesc.classList)

    if (!hlDesc.classList.contains('active')) {
      hlDesc.classList.add('active');
    }
    if (!gDesc.classList.contains('gallery-hover')) {
      gDesc.classList.add('gallery-hover');
    }
  }

  const removeHlDesc = (descId) => {
    console.log('inside removehighlightDesc');
    let hlDesc = document.getElementById(descId);
    let gDesc = document.getElementById('gDesc');
    if (hlDesc.classList.contains('active')) {
      hlDesc.classList.remove('active');
    }
    if (gDesc.classList.contains('gallery-hover')) {
      gDesc.classList.remove('gallery-hover');
    }
  } 

  return (
    <div className='Home'>
      <header className='hero'>
        <div className='hero-txt'>
          <h1>SHIELD</h1>
          <p>Your Possessions, Our Responsibility</p>
        </div>
      </header>
      <section className='container'>
        <h2>What is SHIELD?</h2>
        <div className='what-is-shield'>
          <div>
            <p>SHIELD is an IoT-based technology that provides a perfect ecosystem for world-class Security at a minimal cost.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius ipsa vitae ea beatae itaque! Aperiam facere neque error sed?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nesciunt sit quod nemo fugiat ipsam nisi ex doloribus laborum unde quos iste eius, voluptatum, consectetur commodi odio quas! Placeat, nisi!</p>
          </div>
          <img src={require('../assets/what-is-shield.png')} alt='What is shield?'/>
        </div>
        
      </section>
      <section className='container'>
        <h2>SHIELD solves them all</h2>
        <p>We provide the security you need to make a world of difference.</p>

        <div className='gallery-container'>
          <div className='gallery' id='gImg'>

            <img id="center" src={require('../assets/picgrid/centre.png')} alt="SHIELD" />
            <img onMouseOver={() => highlightDesc('gDesc1')} onMouseOut={(() => removeHlDesc('gDesc1'))} id="gImg1" src={require("../assets/picgrid/exam-paper-leaked.jpg")} alt="Exam" />
            <img onMouseOver={() => highlightDesc('gDesc2')} onMouseOut={(() => removeHlDesc('gDesc2'))} id="gImg2" src={require("../assets/picgrid/money-looted-atm.webp")} alt="ATM" />
            <img onMouseOver={() => highlightDesc('gDesc3')} onMouseOut={(() => removeHlDesc('gDesc3'))} id="gImg3" src={require("../assets/picgrid/eeg-cap.jpg")} alt="EEG Machine" />
            <img onMouseOver={() => highlightDesc('gDesc4')} onMouseOut={(() => removeHlDesc('gDesc4'))} id="gImg4" src={require("../assets/picgrid/important-docs.jpg")} alt="Important documents" />
            <img onMouseOver={() => highlightDesc('gDesc5')} onMouseOut={(() => removeHlDesc('gDesc5'))} id="gImg5" src={require("../assets/picgrid/evm.jpg")} alt="Electronic voting machine" />

          </div>
          <div id='gDesc' className='gallery-desc'>
            <ul>
              <li id="gDesc1">Leaking of exam paper.</li>
              <li id="gDesc2">Money looted in between transfers to ATM.</li>
              <li id="gDesc3">Expensive and valuable equipments stolen.</li>
              <li id="gDesc4">Important documents got plundered.</li>
              <li id="gDesc5">Tampering of EVM.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='container carousel'>
        <h2>Why SHIELD?</h2>
        <p></p>
        <Carousel />
      </section>

      <section className='container'>
        <h2 id='ourTeam'>Our team</h2>
        <p>The people behind SHIELD.. Team Revolutionists!</p>
        <div className='team'>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/harshada.jpeg')} alt='S Harshada' />
              </div>
              <p className='institute-name'>IIT (ISM) Dhanbad</p>
              <h3 className='profile-name'>S Harshada</h3>
              <div className='social'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/s-harshada-064898204/">LinkedIn</a>
                <a href="https://github.com/tripathics">GitHub</a>
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/susham.jpeg')} alt='Susham' />
              </div>
              <p className='institute-name'>NIT Rourkela</p>
              <h3 className='profile-name'>Susham Kumar Pradhan</h3>
              <div className='social'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/susham-kumar-pradhan-4999a820a/">LinkedIn</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/sushamkumar8">GitHub</a>
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/prateek.jpeg')} alt='Prateek' />
              </div>
              <p className='institute-name'>NIT Rourkela</p>
              <h3 className='profile-name'>Prateek Das</h3>
              <div className='social'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prateeek17/">LinkedIn</a>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/prateek27das">GitHub</a>
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile-card'>
              <div className='dp-wrapper'>
                <img className='dp' src={require('../assets/team/chandrashekhar.jpeg')} alt='Chandrashekhar' />
              </div>
              <p className='institute-name'>NIT Arunachal Pradesh</p>
              <h3 className='profile-name'>Chandrashekhar Tripathi</h3>
              <div className='social'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chandrashekhar-tripathi-1aa1a6201">LinkedIn</a>
                <a target="_blank" rel="noreferrer" href="https://tripathics.github.io/homepage">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-us'>
          <a href="mailto:sharshada2001@gmail.com">
            <button>
              <span>
                <img src='./media/icons/mail.png' alt="mail icon" />
              </span>
              <span>Contact us</span>
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home