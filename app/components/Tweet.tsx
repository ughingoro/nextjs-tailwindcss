import React from 'react'
import Link from 'next/link';
import {GoKebabHorizontal} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {FaRetweet} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import {FiBarChart2} from "react-icons/fi";

const Tweet = () => {
  return (
     
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">

      <img 
        className='w-12 h-12 rounded-full mr-3'
        src="https://media.licdn.com/dms/image/D4D03AQFWEJa9SotfRw/profile-displayphoto-shrink_800_800/0/1659529705279?e=1685577600&v=beta&t=-52qGjquUiLej95iLH9YO5W_z4TvKBXCrwvzHVjMSkQ" 
        alt="Usman Ghani Hingoro Profile Image" 
      />
        <div className='w-full'>
          <div className='flex'>
              <div className='flex'>
                <Link href={"https://www.linkedin.com/in/usman-ghani-hingoro/"}>
                  <span className='text-gray-800' mr-1> <strong>Usman Ghani Hingoro </strong></span>
                  <span className='text-gray-500' mr-1>@ughingoro</span>
                </Link> 
                <span className='text-gray-500' mr-1>&middot;</span>
                <span className='text-gray-500' mr-1>18-Mar</span>
              </div>
              <div className='ml-auto'>
                <GoKebabHorizontal />
              </div>
            </div>
          <div>You are amazing if you take time to comment on a tweet or YouTube video or a blogpost that has helped you!</div>
          
          <div className='mt-2 flex justify-between'>
            
            <div className='flex items-center'>
              <FaRegComment className='mr-2 text-gray-600' />
            <span className='text-gray-600'>20</span>
            </div>
            
            <div className='flex items-center'>
              <FaRetweet className='mr-2 text-gray-600' />
            <span className='text-gray-600'>17</span>
            </div>
            
            <div className='flex items-center'>
              <AiOutlineHeart className='mr-2 text-gray-600' />
              <span className='text-gray-600'>215</span>
              </div>
            
            <div className='flex items-center'>
              <BsUpload className='mr-2 text-gray-600' />
            </div>
            
            <div className='flex items-center'>
              <FiBarChart2 className='mr-2 text-gray-600' />
            </div>

          </div>
        </div>
    </div>

  )
}

export default Tweet
