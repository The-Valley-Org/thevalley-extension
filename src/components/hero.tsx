import React from 'react';
import Button from './button';

function Hero() {
  return (
    <div className='relative overflow-clipw-full h-[323px] flex flex-col justify-center items-center bg-darkGreen gap-10'>
        <Pattern/>

        <h1 className='text-white font-semibold text-2xl text-center z-20'>
        Fundraising Copilot By The Valley
        </h1>
        
        <Button
        text="Fill it Out!"
        className='w-[279px] h-12 text-white shadow-lg shadow-[#39C6897D] drop-shadow-lg bg-lightGreen border border-slate-400'
        />

        <p className="text-sm text-white text-center">
        We’ll help you autofill application. information is pulled from your account
        </p>
    </div>
  )
}

export default Hero

function Pattern() {
    return (
      <img
        src="/patterns/left-pattern.svg"
        alt="marketplaces header pattern"
        className="absolute scale-x-[-1] top-0 right-0"
      />
    );
  }