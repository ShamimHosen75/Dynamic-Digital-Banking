import React from 'react';
import Intro from '../../assets/Intro.jpg';

const Commitment = () => {
  return (
    <div className='pt-5 pb-14'>
      <h1 className='text-center text-primary text-4xl font-semibold pt-5 pb-9 mb-7'>Our continued commitment to you</h1>
      <div className='flex gap-10'>
      <div className='pl-12 pr-20'>
        <p>Our focus on respecting your privacy and safeguarding your personal data remains as strong as ever. We’ve updated our privacy notices to reflect the new and strengthened rights in relation to your personal data, and the legal grounds for using it.</p>
        <br />
        <h3 className='text-xl font-bold'>We’re committed to</h3>
        <br />
        <p className='flex gap-3'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></i> Keeping your data safe</p>
       <br />
        <p className='flex gap-3'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></i> Giving you control and flexibility</p>
       <br />
        <p className='flex gap-3'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></i> Providing useful and timely information</p>
      </div>
      
      <div className='pr-5 w-full'>
      <img src={Intro} alt="" />
      </div>   
      </div>
    </div>
  );
};

export default Commitment;