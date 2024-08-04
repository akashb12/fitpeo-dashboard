import React from 'react';
import { FcPaid, FcInTransit, FcCancel, FcCurrencyExchange } from "react-icons/fc";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { BiSolidDish } from "react-icons/bi";
import ActivityChart from './ActivityChart';
import OrderList from './OrderList';
import FeedbackList from './FeedbackList';

const DashBoard = () => {
  return (
    <div className='flex flex-col md:flex-row hide-scrollbar h-[90vh] md:h-[80vh] m-2 md:m-5'>
      {/* left part */}
      <div className='w-[100%] md:w-[60%] mb-5 md:mb-0'>
        {/* top details - total orders, total delivered, total cancelled, etc */}
        <div className='flex flex-col md:flex-row gap-2 md:mr-8'>
          <BoxWrapper>
            <div className='mb-4'>
              <div className='flex rounded-lg h-12 w-12 items-center justify-center bg-[#293368] mb-1'>
                <FcPaid className='text-3xl' />
              </div>
              <span className='text-white text-xs'>Total Orders</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-2xl text-white'>75</span>
              <span className='text-green-400 text-sm flex items-center'><TiArrowSortedUp />3%</span>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='mb-4'>
              <div className='flex rounded-lg h-12 w-12 items-center justify-center bg-[#165246] mb-1'>
                <FcInTransit className='text-3xl' />
              </div>
              <span className='text-white text-xs'>Total Delivered</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-2xl text-white'>70</span>
              <span className='text-green-400 text-sm flex items-center'><TiArrowSortedDown />3%</span>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='mb-4'>
              <div className='flex rounded-lg h-12 w-12 items-center justify-center bg-[#5f3237] mb-1'>
                <FcCancel className='text-3xl' />
              </div>
              <span className='text-white text-xs'>Total Cancelled</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-2xl text-white'>05</span>
              <span className='text-green-400 text-sm flex items-center'><TiArrowSortedUp />3%</span>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className='mb-4'>
              <div className='flex rounded-lg h-12 w-12 items-center justify-center bg-[#5b2a4a] mb-1'>
                <FcCurrencyExchange className='text-3xl' />
              </div>
              <span className='text-white text-xs'>Total Revenue</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-2xl text-white'>$12k</span>
              <span className='text-green-400 text-sm flex items-end'><TiArrowSortedDown />3%</span>
            </div>
          </BoxWrapper>
        </div>
        {/* activity graph */}
        <ActivityChart />
        <OrderList />
      </div>
      {/* right part */}
      <div className='w-[100%] md:w-[40%]'>
        {/* 1st part */}
        <BoxWrapper>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-around'>
              <span className='text-white text-xs flex mb-4'>Net Profit</span>
              <span className='font-bold text-3xl text-white flex'>$6759.25</span>
              <span className='text-green-400 text-sm flex items-center'><TiArrowSortedUp />3%</span>
            </div>
            <div>
              <svg width="120" height="120">
                <g transform="rotate(-90 60 60)">
                  <circle r="42" cx="60" cy="60" fill="transparent" stroke="#2a336c" stroke-width="0.8rem" stroke-dasharray="263.9" stroke-dashoffset="0"></circle>
                  <circle r="42" cx="60" cy="60" fill="transparent" stroke="#7294ff" stroke-width="0.8rem" stroke-dasharray="263.9" stroke-dashoffset="39.6"></circle>
                </g>
                <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="white" font-size="16">70%</text>
                <text x="50%" y="64%" dominant-baseline="central" text-anchor="middle" fill="#9fa0a5" font-size="7">Goal Completed</text>
                <text x="50%" y="97%" dominant-baseline="central" text-anchor="middle" fill="#a8a9ae" font-size="5">*Values rounded off</text>
              </svg>


            </div>
          </div>
        </BoxWrapper>
        {/* 2nd part */}
        <div className='h-[22rem] bg-[#202028] p-4 border-[#202028] rounded-lg flex flex-col flex-1 mt-5'>
          <div className='flex justify-between items-center'>
            <div className='flex p-4 items-center'>
              <RoundBorder bgColor={'bg-[#5f3237]'}>
                <GoGoal fontSize={30} className='text-[#ea681d]' />
              </RoundBorder>
              <span className='text-white'>Goals</span>
            </div>
            <RoundBorder size={'h-8 w-8'}><MdKeyboardArrowRight className='text-white' fontSize={24}/></RoundBorder>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex p-4 items-center'>
              <RoundBorder bgColor={'bg-[#293368]'}>
                <IoFastFoodSharp fontSize={30} className='text-[#6a87ef]' />
              </RoundBorder>
              <span className='text-white'>Popular Dishes</span>
            </div>
            <RoundBorder size={'h-8 w-8'}><MdKeyboardArrowRight className='text-white' fontSize={24}/></RoundBorder>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex p-4 items-center'>
              <RoundBorder bgColor={'bg-[#214a60]'}>
                <BiSolidDish fontSize={30} className='text-[#6a87ef]' />
              </RoundBorder>
              <span className='text-white'>Menus</span>
            </div>
            <RoundBorder size={'h-8 w-8'}><MdKeyboardArrowRight className='text-white' fontSize={24}/></RoundBorder>
          </div>
        </div>
        {/* third part */}
        <FeedbackList />
      </div>
    </div>
  )
}

export default DashBoard

function BoxWrapper({ children }) {
  return <div className='bg-[#202028] rounded-lg px-4 py-2 flex-1 border border-[#202028] flex flex-col justify-around'>{children}</div>
}

function RoundBorder({children,bgColor,size}) {
  return <div className={`flex rounded-full ${size ? size : 'h-16 w-16'} items-center justify-center cursor-pointer ${bgColor ? bgColor : 'bg-[#214a60]'} mb-1 mr-3`}>{children}</div>
}
