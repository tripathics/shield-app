import React from 'react'
import '../scss/dashboard.scss'

const Card = (props) => {
  const { boardName, boxState, imgsrc } = props
  let boxLn = <></>
  if (boxState === "Active") {
    boxLn = <p><a href="/board">{boardName}</a></p>
  } else {
    boxLn = <p>{boardName}</p>
  }
  return (
    <div className='card'>
      <div className='img-wrapper'>
        <img src={`./media/boards/${imgsrc}`} alt='board' />
      </div>
      <div className='dash-card-desc'>
        <h4 className='dash-card-title'>
          {boxLn}
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
      status: 'Active',
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 2',
      status: 'Inactive',
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 3',
      status: 'Inactive',
      imgsrc: 'stock.jpg'
    },
    {
      name: 'CBSE Center 4',
      status: 'Inactive',
      imgsrc: 'stock.jpg'
    }
  ]

  const cardsComponent = cards.map(card => {
    return <Card boardName={card.name} boxState={card.status} imgsrc={card.imgsrc} />
  })
  
  return (
    <div className='dash-cards'>
      {cardsComponent}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='dash-hero'>
        <div className='dash-hero-inner-container container'>
          <section>
            <h1 className='hero-heading'>Welcome, Susham</h1>
            <div className='dash-text'>
              <ul>
                <li>Chairman<br/> Central Board of Secondary Education</li>
                <li>Unique ID: 0x124fd</li>
                <li>SHIELDs: 4 (1 active)</li>
              </ul>
            </div>
          </section>
          <section className='dash-dp-container'>
            <div className='dash-dp'>
              <img src='./media/cases/3.jpg' alt='Profie'/>
            </div>
          </section>
        </div>
      </div>
      <section className='container content'>
        <h3>Your SHIELDs</h3>
        <Cards />
      </section>
    </div>
  )
}

export default Dashboard;