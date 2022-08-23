import React from 'react'
import '../dashboard.css'

const Card = (props) => {
  const { boardName, boxState, imgsrc } = props
  return (
    <div className='dash-card'>
      <div className='img-wrapper'>
        <img src={`./media/boards/${imgsrc}`} alt='board' />
      </div>
      <div className='dash-card-desc'>
        <h4 className='dash-card-title'>
          <a href="/board">{boardName}</a>
        </h4>
        <div className='dash-card-subtitle'>
          <div className={boxState}></div>
          <p>{boxState}</p>
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  const cards = [
    {
      name: 'CBSE Center 1',
      desc: 'Active',      
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 2',
      desc: 'Inactive',
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 3',
      desc: 'Inactive',
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 4',
      desc: 'Inactive',
      imgsrc: 'stock.jpg'
    }
  ]

  const cardsComponent = cards.map(card => {
    return <Card boardName={card.name} boxState={card.desc} imgsrc={card.imgsrc} />
  })
  
  return (
    <div className='dash-cards'>
      {cardsComponent}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <div className='dash-hero'>
        <div className='dash-hero-inner-container'>
          <section>
            <h1 className='hero-heading'>
              Welcome, Susham
            </h1>

          </section>
          <section className='dash-dp-container'>
            <div className='dash-dp'>
              <img src='./media/cases/3.jpg' alt='Profie'/>
            </div>
          </section>
        </div>
      </div>
      <section className='dash-container'>
        <h3>Your SHIELDs</h3>
        <Cards />
      </section>
    </div>
  )
}

export default Dashboard;