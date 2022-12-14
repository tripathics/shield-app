import React, { Component } from 'react'
import '../scss/box.scss'

import { ref, child, onValue, update } from "firebase/database"
import { db } from "../firebaseConfig"
import { confirmPasswordReset } from 'firebase/auth';

// references
let boxData;

const updateBoxData = () => {
  if (boxData) {
    const ref =  document.getElementById("lockStatus");
    const lastUpdate = document.getElementById("lastUpdate");
    const lockctl = document.getElementById("lockCtl");
    const lockbtn = document.getElementById("lockBtn");
    const unlockbtn = document.getElementById("unlockBtn");
    const boxHero = document.getElementById("boxHero");
    const brokenAlert = document.getElementById("alert");
    const locateBtn = document.getElementById("locate");

    console.log(boxData)

    if (boxData["LOCK_STATUS"] === 1) {
      ref.innerHTML = "Unlocked";
      unlockbtn.setAttribute("disabled", "");
      lockbtn.removeAttribute("disabled");
      
      unlockbtn.classList.add("disabled");
      lockbtn.classList.remove("disabled");
    } else if (boxData["LOCK_STATUS"] === 0) {
      ref.innerHTML = "Locked";
      lockbtn.setAttribute("disabled", "");
      unlockbtn.removeAttribute("disabled");

      unlockbtn.classList.remove("disabled");
      lockbtn.classList.add("disabled");
    }
    if (boxData["LOCATION"]) {
      locateBtn.setAttribute("href", `http://www.google.com/maps/place/${boxData["LOCATION"]}`);
      locateBtn.firstChild.innerHTML = "Locate on map"
    }
    ref.style.fontWeight = 600;
    lockctl.style.display = "block";

    if (boxData["ALERT"] === 1) {
      boxHero.classList.add('tampered');
      brokenAlert.style.display = 'block';
    }

    let curr_time = new Date();
    lastUpdate.innerHTML = curr_time.toString().slice(0, curr_time.toString().length - 21);
  }
}

const dbref = ref(db);

const updateLock = (st) => {
  update(dbref, {
    '/LOCK_STATUS/': st
  });
}

class Box extends Component {
  componentDidMount() {
    onValue(child(dbref, "/"), (snapshot) => {
      boxData = snapshot.val();
      console.log(boxData)
      updateBoxData();
    })
  }

  render() {
    return (
      <div className='Box'>
        <section id="boxHero" className='hero'>
          <section className='container'>
            <div className='heading'>
              <h1>CBSE Center 1</h1>
              <div className='hero-status' id="heroInd"><div className='indicator active' /> </div>
            </div>
            <div className='box-details'>
              <div>
                <ul>
                  <li>SHIELD status: <span id="lockStatus">Loading...</span></li>
                  <li>Last update: <time id="lastUpdate">Loading...</time></li>
                </ul>
              </div>
              <div>
                <p>Box ID: ubk69xyin</p>
              </div>
            </div>

          </section>
        </section>
        <section className='container content'>
          <div id='alert'>
            <p><span className='hd'>Alert:</span> The box has been broken!</p>
          </div>
          <div className='section-heading'>
            <h2>Track your box</h2>
            <a target="_blank" rel="noreferrer" id="locate" href="/board">
              <button className='show-on-map'>Loading...</button>
            </a>
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

          <div id="lockCtl" className='lock-control'>
            <div className='lock-unlock-btns'>
              <button id="lockBtn" onClick={() => updateLock(0)} className="disabled">Lock</button>
              <button id="unlockBtn" onClick={() => updateLock(1)} className="disabled">Unlock</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Box