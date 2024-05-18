import Image from 'next/image'
import React from 'react'
import svg1 from '@/public/svgs/Frame 53 (1).png'

interface Props{
    image : string;
    title : string;
    description : string;
  }
  
const Card2 = ({image,title,description}:Props) => {
    return (
        <div className='w-[270px] h-[336px] px-[24px] rounded-[8px] flex flex-col justify-center items-center gap-[24px] bg-[#F5F5F5]'>
            <div className='h-[96px] w-[96px] relative '>
               <Image src={image} layout='fill' objectFit='cover' alt='img' />
            </div>
            <div className='w-[222px] h-[48px] font-[700] text-[16px] text-[#141414] Dm_Sans text-center leading-[24px]'>{title}</div>
            <div className='w-[252px] h-[72px] font-[400] text-[16px] text-[#141414] Dm_Sans text-center leading-[24px]'>{description}</div>
        </div>
    )
}

export default Card2
