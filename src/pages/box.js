import React from 'react'
import '../scss/box.scss'

import { ref, child, onValue, update } from "firebase/database"
import { db } from "../firebaseConfig"

// references
let boxData;

const updateBoxData = () => {
  if (boxData) {
    const ref =  document.getElementById("lockStatus");
    const lastUpdate = document.getElementById("lastUpdate");
    if (boxData["LOCK_STATUS"] === 0) {
      ref.innerHTML = "Unlocked";
    } else {
      ref.innerHTML = "Locked";
    }

    let curr_time = new Date();
    lastUpdate.innerHTML = curr_time;
  }
}

const dbref = ref(db);
onValue(child(dbref, "/"), (snapshot) => {
  boxData = snapshot.val();
  updateBoxData();
})

const updateLock = (st) => {
  update(dbref, {
    '/LOCK_STATUS/': st
  });
}

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
            <div>
              <ul>
                <li>SHIELD status: <span id="lockStatus"></span></li>
                <li>Last update: <time id="lastUpdate">Thu, Aug 25 - 09:13</time></li>
              </ul>
            </div>
            <div>
              <p>Box ID: ubk69xyin</p>
            </div>
          </div>

        </section>
      </section>
      <section className='container content'>
        <div className='section-heading'>
          <h2>Track your box</h2>
          <button className='show-on-map'>Locate on map</button>
        </div>
        <div className='tracker'>
          <div className='place'>
            <h3>Source</h3>
            <div className='addr'>
              Shiksha Kendra, 2, Community Centre,<br />
              Preet Vihar, Delhi - 110092
            </div>
            <p><a href='https://goo.gl/maps/df9uxjgT7iVGofZd7' target='_blank' rel='noreferrer'>View on map</a> </p>
          </div>
          <div className='location-progress'>
            <div className='curr' />
            <div className='pin'>
              <img src={require('../assets/icons/box.png')} alt='location pin' />
            </div>
          </div>
          <div className='place'>
            <h3>Destination</h3>
            <div className='addr'>
              Govt. Higher Secondary School, Rupa <br />
              West Kameng, Arunachal Pradesh - 790003
            </div>
            <p><a href='https://goo.gl/maps/DQ72E3yAncDUmEij7' target='_blank' rel='noreferrer'>View on map</a> </p>
          </div>
        </div>

        <div className='lock-control'>
          <div className='lock-unlock-btns'>
            <button onClick={() => updateLock(1)}>Lock</button>
            <button onClick={() => updateLock(0)}>Unlock</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Box