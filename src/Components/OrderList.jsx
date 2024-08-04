import React from 'react'
import { RECENT_ORDERS } from '../lib/consts/navigation'

const OrderList = () => {
    return (
        <div className='h-[26rem] hide-scrollbar bg-[#202028] p-4 border-[#202028] rounded-lg flex flex-col flex-1 md:mr-8 mt-5'>
            <span className='text-white font-bold text-2xl'>Recent Orders</span>
            <div className='mt-3'>
                <table className='w-full'>
                    <thead className='bg-[#202028]'>
                        <tr>
                            <td className='text-white font-bold border-none'>Customer</td>
                            <td className='text-white font-bold border-none'>Order No.</td>
                            <td className='text-white font-bold border-none'>Amount</td>
                            <td className='text-white font-bold border-none'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RECENT_ORDERS.map((item) => (
                                <tr key={item.order_no}>
                                    <td className='text-white border-gray-600'>
                                       <div className='flex items-center gap-2'>
                                       <img className='w-5 h-5 object-cover rounded-full cursor-pointer' src="./face.jpg" alt="face" />
                                       {item.customer}
                                       </div>
                                    </td>
                                    <td className='text-white border-gray-600'>{item.order_no}</td>
                                    <td className='text-white border-gray-600'>{item.amount}</td>
                                    <td className={`text-white border-gray-600 ${item.status == 'Delivered' ? 'text-[#117f61]' : 'text-[#b0494c]'}`}>
                                        <span className={`flex rounded-lg h-5 w-20 items-center justify-center mb-1 ${item.status == 'Delivered' ? 'bg-[#115546]' : 'bg-[#5f3238]'}`}>
                                        {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderList
