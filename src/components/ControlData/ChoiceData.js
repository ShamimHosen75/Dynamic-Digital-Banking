import React from 'react';

const ChoiceData = () => {
  return (
    <div>
      <h1 className='text-center text-primary text-4xl font-semibold pt-5 pb-7 mb-'>Your choices</h1>
      <p className='text-center pb-14'>Manage your data requests and the information you receive from us.</p>
      <div className='grid sm:grid-cols-1 md:sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center pl-12 pb-14'>
        {/* card-1  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Request your data</h2>
       <p>If you need to, you can ask us to send you your personal data.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Request data</button>
       </div>
       </div>
      </div>
        
        {/* card-2  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Marketing choices</h2>
       <p>Ask us to stop using your personal data to send you information about offers, products and services.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Stop Marketing</button>
       </div>
       </div>
      </div>
        
        {/* card-3  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Other objections</h2>
       <p>Ask us to stop using your personal data in a particular way.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Object to data</button>
       </div>
       </div>
      </div>
        
        {/* card-4  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Move your data</h2>
       <p>Request your personal data so you can share it with another organisation.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Move data</button>
       </div>
       </div>
      </div>
        
        {/* card-5  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Request data deletion</h2>
       <p>Ensure your personal contact information is correct.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Data Deletion</button>
       </div>
       </div>
      </div>
        
        {/* card-6  */}
      <div className="card w-96 bg-base-100 shadow-xl items-center justify-center">
         <div className="card-body bg-blue-100">
       <h2 className="card-title pt-5 text-2xl font-bold">Check contact details</h2>
       <p>Ensure your personal contact information is correct.</p>
       <div className="card-actions justify-center pt-16 pb-3">
      <button className="btn btn-primary text-white capitalize bg-primary hover:bg-black px-5 py-2 rounded-2xl">Contact Details</button>
       </div>
       </div>
      </div>
        
      </div>
    </div>
  );
};

export default ChoiceData;