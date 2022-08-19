import React from 'react'
import '../index.css'

const CarauselCard = (props) => {
  const {imgsrc, title, subtitle} = props
  return (
    <div className='card'>
      <div className='img-wrapper'>
        <img src={`./media/cases/${imgsrc}`} alt='decoration' />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

const Carousel = () => {
  const cards = [
    {
      imgsrc: "stock.jpg",
      title: 'Less humans',
      subtitle: 'It reduces the human workforce and physical intervention.' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Minimal cost',
      subtitle: 'It provides world-class security at a minimal cost.' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Secure from any place',
      subtitle: 'The box can be remotely secured from any place.' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Tamper proof',
      subtitle: 'If any evil deed or breakage occurs, it can generate notifications to the authorities..' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Track it from anywhere',
      subtitle: 'The box comes with inbuilt GPS to track it in realtime.' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Get notified via SMS and phone call',
      subtitle: 'In places with poor or no internet connectiviey, the box can notify via SMS and phone call to the registered mobile.' 
    },
    {
      imgsrc: "stock.jpg",
      title: 'Wireless charging',
      subtitle: 'Wireless charging comes built in the box to easily recharge the battery during transportation.' 
    }
  ]

  const cardsComponent = cards.map((card, i) => {
    return <CarauselCard key={i} imgsrc={card.imgsrc} title={card.title} subtitle={card.subtitle} />
  })

  return (
    <div className='scroll-wrapper'>
      <div className='scroll-cards'>
      {cardsComponent}
      </div>
    </div>
  )
}

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

      <section className='container carousel'>
        <h2>Why SHIELD?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure.</p>
        <Carousel />
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