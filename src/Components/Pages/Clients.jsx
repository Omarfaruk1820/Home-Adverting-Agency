import React from 'react';
import google from "../../assets/img/google.png"
import tesla from "../../assets/img/tesla.png"
import airbnd from "../../assets/img/airbnb.png"
import facebook from "../../assets/img/fb.png"
import Dizro from "../../assets/img/omar.png"
import netflix from "../../assets/img/netflix.png"
import grameenPhone from "../../assets/img/walton (1).png"
import walton from "../../assets/img/walton (2).png"
const Clients = () => {
    return (
      <div className='bg-gray-100 mt-10'>
        <p className='font-bold text-xl text-center'>Our Happy Clients</p>
         <div className='grid grid-cols-4 gap-5 space-y-10 mt-10 justify-center md:ml-36 items-center '>
          <div className='flex'>
          <img className='w-8 h-8' src={Dizro} alt="DiZro" /> 
          <p className='font-medium'>Dizro</p>
          </div>
          <div className='flex'>
          <img className='w-8 h-8' src={google} alt="Google" /> 
          <p className='font-medium'>Google</p>
          </div>
         <div className='flex'>
         <img className='w-10 h-8' src={tesla } alt="tesla" />
         <p className='font-medium'>Tesla</p>
            </div> 
         <div className='flex'>
         <img className='w-10 h-6' src={airbnd} alt="airbnd" /> 
         <p className='font-medium'>Airbnd</p>
         </div>
         <div className='flex'>
         <img className='w-10 h-6' src={facebook} alt="facebook" />
         <p className='font-medium'>Facebook</p> 
         </div>
         <div className='flex'>
         <img className='w-10 h-6' src={netflix} alt="netflix" /> 
         <p className='font-medium'>netflix</p>
         </div>
          <div className='flex'>
          <img className='w-10 h-6' src={grameenPhone} alt="GrameenPhone" /> 
          <p className='font-medium'>Walton</p> 
         
          </div>
          <div className='flex'>
          <img className='w-10 h-6' src={walton} alt="Walton" />
          <p className='font-medium'>GP</p>
          </div>
    
        </div>
      </div>
    );
};

export default Clients;