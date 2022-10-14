import React from 'react';
import FSCSLogo from '../../assets/FSCS-logo.jpg';
import KiteMarkLogo from '../../assets/Kitemark-logo.jpg';

const Authority = () => {
  return (
    <div className='pb-14'>
      <div className='text-center px-40 mt-20 pb-12'>
        <p>Barclays Bank UK PLC and Barclays Bank PLC are each authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.</p>
        <br />
        <br />
        <p>Barclays Insurance Services Company Limited and Barclays Investment Solutions Limited are each authorised and regulated by the Financial Conduct Authority.</p>
        <br />
        <br />
        <p>Registered office for all: 1 Churchill Place, London E14 5HP</p>
      </div>
      <div className='flex items-center justify-center'>
        <div>
          <img src={FSCSLogo} alt="" />
        </div>
        <div>
          <img src={KiteMarkLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authority;