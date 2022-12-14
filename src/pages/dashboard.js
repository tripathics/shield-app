import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
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
      imgsrc: 'centre1.jpg'
    },
    {
      name: 'CBSE Center 2',
      status: 'Inactive',
      imgsrc: 'centre2.webp'
    },
    {
      name: 'CBSE Center 3',
      status: 'Inactive',
      imgsrc: 'centre3.jpg'
    },
    {
      name: 'CBSE Center 4',
      status: 'Inactive',
      imgsrc: 'centre5.webp'
    }
  ]

  const cardsComponent = cards.map((card, i) => {
    return <Card key={i} boardName={card.name} boxState={card.status} imgsrc={card.imgsrc} />
  })
  
  return (
    <div className='dash-cards'>
      {cardsComponent}
    </div>
  )
}

const Dashboard = () => {
  let navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/dashboard');
    }
    if (!authToken) {
      navigate('/login');
    }
  }, [])
  return (
    <div className='Dashboard'>
      <div className='dash-hero'>
        <div className='dash-hero-inner-container container'>
          <section>
            <h1 className='hero-heading'>Welcome, Nidhi</h1>
            <div className='dash-text'>
              <ul>
                <li>Nidhi Chibber IAS, Chairman<br/> Central Board of Secondary Education</li>
                <li>Unique ID: 0x124fd</li>
                <li>SHIELDs: 4 (1 active)</li>
              </ul>
            </div>
          </section>
          <section className='dash-dp-container'>
            <div className='dash-dp'>
              <img src='./media/dash-dp2.png' alt='Profie'/>
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