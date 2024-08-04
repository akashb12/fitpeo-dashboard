import React from 'react'
import { CUSTOMER_FEEDBACK } from '../lib/consts/navigation'
import { IoIosStar } from "react-icons/io";

const FeedbackList = () => {
    return (
        <div className='h-[26rem] hide-scrollbar bg-[#202028] p-4 border-[#202028] rounded-lg flex flex-col flex-1 mt-5'>
            <span className='text-white font-bold text-2xl'>Customer's Feedback</span>
            <div className='mt-3'>
                {
                    CUSTOMER_FEEDBACK.map((item) => (
                        <div className='mb-6'>
                            <div className='flex items-center gap-2 text-white mb-2'>
                                <img className='w-5 h-5 object-cover rounded-full cursor-pointer' src="./face.jpg" alt="face" />
                                <span className='text-xl font-bold'>{item.name}</span>
                            </div>
                            <StarRating rating={item.rating} />
                            <div className='text-[#7e7f84] text-sm'>
                                {item.feedback}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeedbackList

const StarRating = ({ rating }) => {
    return (
        <div className='flex mb-2'>
        {[...Array(5)].map((star, index) => (
          <span key={index}>
            {index < rating ? <IoIosStar className='text-yellow-400' /> : <IoIosStar className='text-white' />}
          </span>
        ))}
      </div>
    )
}
