import React from 'react'
import Card1 from '../Services1/card/Card1'

const Services1 = () => {
    return (
        <div className='h-[1377px] w-[1280px] relative top-0 left-0 p-[64px] gap-[64px] flex flex-col justify-center items-center'>
            <div className='h-[65px] w-[1152px] flex flex-col justify-between items-center'>
                <h1 className='h-[65px] w-[439px] text-center Poppines font-[700] text-[45px] leading-[65px] tracking-[-2%] text-[#072135]'>Scope Of Services</h1>
            </div>
            <div className='h-[1152px] w-[1120px] flex flex-col justify-center items-center gap-[24px]'>
                <div className='h-[336px] w-full gap-[24px] flex justify-center items-center'>
                    <Card1
                        image='/svgs/11.png'
                        title='OPD - Outpatient Department'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/12.png'
                        title='Psychological Assessment'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/13.png'
                        title='Academic and Trainings'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/14.png'
                        title='Parent Training Program'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                </div>
                <div className='h-[336px] w-[1152px] gap-[24px] flex justify-center items-center'>
                    <Card1
                        image='/svgs/15.png'
                        title='Speech  Therapy'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/16.png'
                        title='ABA & Expressive Art Therapy'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/17.png'
                        title='Diet Clinic'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/18.png'
                        title='Behavior Modification'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                </div>
                <div className='h-[336px] w-[1152px] gap-[24px] flex justify-center items-center'>
                    <Card1
                        image='/svgs/19.png'
                        title='Occupational Therapy (OT)'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/110.png'
                        title='Special Education'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/111.png'
                        title='Home Plans'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                    <Card1
                        image='/svgs/112.png'
                        title='Observation Room For Parents'
                        description='Lorem ipsum dolor sit amet consectetur. Laoreet varius sed elementum dignissim.' />
                </div>
            </div>
            <div className='h-[40px] w-[137.96px] rounded-[4px] py-[12px] px-[24px] gap-[12px] flex justify-center items-center'>
                <h1 className='h-[13px] w-[62px] Dm-Sans font-[700] text-[14px] leading-[24px] text-[#0C395A] flex justify-center items-center'>View All</h1>
                <h1 className='h-[16px] w-[15.96px] text-[#0C395A]'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4193 9.45056C14.4193 9.0352 14.7565 8.69796 15.1719 8.69796C15.5872 8.69796 15.9245 9.0352 15.9245 9.45056V13.7722C15.9245 14.3855 15.6745 14.9427 15.2708 15.3464C14.8672 15.75 14.3099 16 13.6966 16H2.24608C1.6328 16 1.07551 15.75 0.671865 15.3464C0.268219 14.9427 0.018219 14.3855 0.018219 13.7722V2.23832C0.018219 1.62504 0.268219 1.06775 0.671865 0.664104C1.07551 0.260458 1.6328 0.0104582 2.24608 0.0104582H6.54035C6.95572 0.0104582 7.29296 0.347698 7.29296 0.763062C7.29296 1.17843 6.95572 1.51567 6.54035 1.51567H2.24608C2.04817 1.51567 1.86848 1.5977 1.73697 1.72791C1.60546 1.85942 1.52473 2.0391 1.52473 2.23702V13.7709C1.52473 13.9688 1.60676 14.1485 1.73697 14.28C1.86848 14.4115 2.04817 14.4922 2.24608 14.4922H13.6979C13.8958 14.4922 14.0755 14.4102 14.207 14.28C14.3385 14.1498 14.4193 13.9688 14.4193 13.7709V9.45056ZM14.6562 2.27348L7.05077 9.974C6.76041 10.2696 6.28384 10.2735 5.98827 9.98311C5.6927 9.69275 5.68879 9.21619 5.97916 8.92061L13.2917 1.51567H10.2474C9.83202 1.51567 9.49478 1.17843 9.49478 0.763062C9.49478 0.347698 9.83202 0.0104582 10.2474 0.0104582H13.6979C14.3646 0.0104582 15.2239 -0.102823 15.7357 0.414104C16.0586 0.740927 15.987 3.3464 15.9453 4.85551C15.9349 5.24614 15.9258 5.54431 15.9258 5.75785C15.9258 6.17322 15.5885 6.51046 15.1732 6.51046C14.7578 6.51046 14.4206 6.17322 14.4206 5.75785C14.4206 5.71749 14.431 5.32556 14.4453 4.81515C14.4661 4.02869 14.5924 2.98702 14.6562 2.27348Z" fill="#0C395A" />
                </svg>
                </h1>
            </div>
        </div>
    )
}

export default Services1
