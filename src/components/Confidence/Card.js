import React from 'react';

const Card = () => {
  return (
    <div>
      <div className='text-center text-primary text-3xl font-semibold pt-5 pb-9 mb-7'>
        <h1>Tools, courses and sessions</h1>
      </div>
      <div className='grid sm:grid-cols-1 md:sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-center'>
        {/* card-1  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/1XFyxb5/coding.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Coding and online safety for kids</h2>
         <p>Our Code Playground sessions can help your children learn coding basics. Check out our Code Playground Live YouTube playlists. </p>
        <div className="card-actions justify-center pt-40 pb-7">
          <button className="btn btn-primary text-white hover:bg-black capitalize bg-primary px-7 py-2 rounded-2xl">View our session</button>
        </div>
        </div>
       </div>
        {/* card-2  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/KGPgFDj/bbc.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">BBC micro:bit</h2>
         <p>The fun way to learn how to code</p>
         <br />
         <p>We’ ve partnered with the BBC to give up to a million children a device that will help them learn code.</p>
        <div className="card-actions justify-center pt-36 pb-7">
          <button className="btn btn-primary text-white bg-primary hover:bg-black capitalize px-7 py-2 rounded-2xl ml-7">BBC micro:bit</button>
        </div>
        </div>
       </div>
        {/* card-3  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/Yh0TSLr/life-skills.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">LifeSkills</h2>
         <p>Boost the skills you need for the future.</p>
         <br />
         <p>Learn about basic and more complex digital topics with courses developed by experts.</p>
        <div className="card-actions justify-center pt-36 pb-7">
          <button className="btn btn-primary text-white bg-primary hover:bg-black capitalize px-7 py-2 rounded-2xl ml-7">Learn with LifeSkills</button>
        </div>
        </div>
       </div>
        {/* card-4  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/FwcCk0C/digital.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Digital Eagles</h2>
         <p>Build your digital skills with us</p>
         <br />
         <p>Our Digital Eagles are passionate colleagues, helping everyone get the most out of digital banking. No matter where you are on your journey, we can help keep you up to date and stay safe online.</p>
         <p>You can find us on social media. We’re on Facebook, Twitter, Instagram and LinkedIn – search 'Digital Eagles'.</p>
        <div className="card-actions justify-center pt-5 pb-3">
          <button className="btn btn-primary text-white bg-primary hover:bg-black capitalize px-7 py-2 rounded-2xl ml-7">Learn about Digital Eagles</button>
        </div>
        </div>
       </div>
       {/* card-5  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/rZJkwKz/grow.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Grow your digital knowledge and skills</h2>
         <p>Our Tea and Teach, Barclays DigiSafe and Digital Bar sessions are designed to build your confidence with computers, the internet and our online services.</p>
        <div className="card-actions justify-center pt-20 pb-3">
          <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-7 py-2 rounded-2xl">View Onilne Resources</button>
        </div>
        </div>
       </div>
       {/* card-6  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/QP3Q6f0/bg-digital.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Digital Wings</h2>
         <p>Learn about basic and more complex digital topics with courses developed by experts.</p>
        <div className="card-actions justify-center pt-20 pb-3">
          <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-7 py-2 rounded-2xl">Digital Wings</button>
        </div>
        </div>
       </div>
       {/* card-7  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/8ssZ21x/eagle.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Eagle Labs</h2>
         <p>Whether you’re an inventor, an innovator or a mentor, our spaces are conducive to nurturing and growing your idea.</p>
        <div className="card-actions justify-center pt-20 pb-3">
          <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-7 py-2 rounded-2xl">Explore Eagles Labs</button>
        </div>
        </div>
       </div>
       {/* card-8  */}
       <div className="card w-auto items-center justify-center bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/3Fgj9fT/barclays.jpg" alt="Shoes" /></figure>
         <div className="card-body bg-gray-100">
         <h2 className="card-title pt-5 text-2xl font-bold">Barclays Accelerator</h2>
         <p>Take your business further with intensive fintech focused programmes.</p>
        <div className="card-actions justify-center pt-20 pb-3">
          <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-7 py-2 rounded-2xl">Grow Your Business</button>
        </div>
        </div>
       </div>

      </div>
    </div>
  );
};

export default Card;