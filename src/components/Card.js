import React from 'react';
import EquiImg from '../asset/image-equilibrium.jpg';
import EthImg from '../asset/icon-ethereum.svg';
import CloImg from '../asset/icon-clock.svg';
import ViewImg from '../asset/icon-view.svg';
import AvtImg from '../asset/image-avatar.png';
import  './Card.css'

const Card = () => {
  return (
    <div class="container">
    <article class="main-image"> 
    <img className='EquiImg' src={EquiImg} alt="equimage"/>
      <div>
        <img src={ViewImg} alt="view-icon" />
      </div>
    </article>
    <article>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection 
        promotes balance and calm.</p>

        <ul>
        <li><img className='EthImg' src={EthImg} alt="icon etherum" />  0.041 ETH</li>
        <li><img className='CloImg' src={CloImg} alt="icon clock" /> 3 days left</li>
</ul>
    </article>
    <article class="avatar" >
      <img src={AvtImg} alt="avatar" />
      <p>Creation of <span>Jules Wyvern</span></p>
    </article>
      
  </div>
  
  )
}

export default Card


