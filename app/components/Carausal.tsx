import Image from 'next/image'
import { Carousel } from 'flowbite-react';
import {firstImage} from '/cloths_carausal/images.jpeg'

function Carausal() {
  return (
    <div className="h-56 sm:h-64 xl:h-1/2 2xl:h-screen md:p-5 my-5">
      <Carousel>
        <img className='object-cover w-full h-56 sm:h-64 xl:h-1/2 2xl:h-screen' src='/cloths_carausal/carausal2.jpg' alt="..." />
        <img  className='object-cover w-full h-56 sm:h-64 xl:h-1/2 2xl:h-screen' src="/cloths_carausal/crsl3.jpeg" alt="..." />
        <img  className='object-cover w-full h-56 sm:h-64 xl:h-1/2 2xl:h-screen' src="/cloths_carausal/crsl4.webp" alt="..." />
        <img  className='object-cover w-full h-56 sm:h-64 xl:h-1/2 2xl:h-screen' src="/cloths_carausal/crsl5.jpg" alt="..." />
        <img  className='object-cover w-full h-56 sm:h-64 xl:h-1/2 2xl:h-screen' src="/cloths_carausal/crsl6.jpeg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Carausal;
