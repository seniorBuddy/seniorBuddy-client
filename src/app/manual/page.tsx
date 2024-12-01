'use client'

import React from 'react';
import Link from 'next/link';
import { BiSolidFoodMenu } from 'react-icons/bi'; 
import { manualItems } from '../manual/mock/manual-item'; 
import useModeStore from '../lib/store/useModeStore';

const ManualPage: React.FC = () => {
  const { mode } = useModeStore();
  console.log(mode);

  if(mode === 'simple') {
    return (
      <section className="mx-5 sm:mx-36">
        <div className="border border-gray-300 rounded-lg p-5 shadow-md dark:border-gray-600">
          <div className="flex items-center text-left text-[#136BFF] text-3xl font-bold mb-5">
            <BiSolidFoodMenu className="mr-2 text-3xl" /> 
            설명서
          </div>
          <div className='grid grid-cols-2 gap-3 sm:gap-10 items-center justify-center'>
          {manualItems.filter(item => item.category === '카카오톡').map(item => (
            <Link key={item.id} href={`/manual/${item.id}`} className="
            transform hover:scale-105 hover:bg-[#005bb5] duration-300
            w-full h-16 py-16 bg-blue flex items-center justify-center rounded-xl">
              <div className=" text-white text-xl font-bold text-center px-2">
                {item.title}
              </div>
            </Link>
          ))}
  
          {/* 일상 항목 */}
          {manualItems.filter(item => item.category === '일상').map(item => (
            <Link key={item.id} href={`/manual/${item.id}`} className="
            transform hover:scale-105 hover:bg-[#005bb5] duration-300
            w-full h-16 py-16 bg-blue flex items-center justify-center rounded-xl">
              <div className="text-white rounded-lg text-xl px-2 text-center font-bold" >
                <div className=''>
                {item.title}
                </div>
              </div>
            </Link>
          ))}
          </div>
          
        </div>
      </section>
    );
  } else {
    return (
      <section className="mx-5">
        <div className="border border-gray-300 rounded-lg p-5 shadow-md dark:border-gray-600 ">
          <div className="flex items-center text-left text-[#136BFF] text-3xl font-bold mb-5">
            <BiSolidFoodMenu className="mr-2 text-3xl" />
            설명서
          </div>

          <div className="flex flex-col justify-center items-stretch">
            {/* 아코디언 스타일 카테고리 */}
            {['카카오톡', '일상'].map((category) => (
              <details key={category} className="mb-4">
                <summary className="cursor-pointer text-lg font-bold text-[#136BFF] bg-gray-200 p-2 rounded-md">
                  {category}
                </summary>
                <div className="mt-2 flex flex-col space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {manualItems.filter(item => item.category === category).map(item => (
                    <Link key={item.id} href={`/manual/${item.id}`} className="w-full">
                      <span className="block px-4 py-2 bg-blue-100 text-slate-600 text-lg font-bold rounded-lg hover:bg-blue-200 dark:bg-gray-700 transition-transform duration-300 transform hover:scale-105">
                      ↪ {item.title}
                      </span>
                    </Link>
                   
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default ManualPage;
