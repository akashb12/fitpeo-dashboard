import React from 'react';
import { BsGridFill } from "react-icons/bs";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex flex-col bg-[#202028] w-40 py-3 text-[#6a67e5]'>
        <div className='flex justify-center pb-5'>
            <BsGridFill fontSize={35} className='cursor-pointer' />
        </div>
      <div className='flex-1'>
        {
            DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SideBarLink item={item} />
            ))
        }
      </div>
      <div>
      {
            DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
                <SideBarLink item={item} />
            ))
        }
      </div>
    </div>
  )
}

const SideBarLink = ({item}) => {
    const {pathname} = useLocation();
    return(
        <div className={`flex flex-col items-center hover:bg-neutral-700 ${pathname === item.path && 'border-l-2 border-[#6a67e5]'}`}>
            <Link to={item.path} className={`py-4 hover:no-underline active:bg-neutral-600 ${pathname === item.path ? 'text-[#6a67e5]' : 'text-[#808080]'}`}>
                <span className=' text-[25px]'>{item.icon}</span>
            </Link>
        </div>
    )
}

export default SideBar
