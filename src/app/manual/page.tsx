import React from 'react';
import Link from 'next/link';
import { BiSolidFoodMenu } from 'react-icons/bi'; 
import { manualItems } from '../manual/mock/manual-item'; 

const ManualPage: React.FC = () => {
  return (
    <section className="mx-5">
      <div className="border border-gray-300 rounded-lg p-5 shadow-md dark:border-gray-600">
        <div className="flex items-center text-left text-[#136BFF] text-3xl font-bold mb-5">
          <BiSolidFoodMenu className="mr-2 text-3xl" /> 
          설명서
        </div>

        <div className="flex flex-col justify-center items-stretch">
          {/* 카카오톡 항목 */}
          <div className="grid items-start mb-5 h-full bg-slate-100 rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:shadow-lg dark:bg-gray-900">
            <p className="mt-2 text-2xl text-[#136BFF] font-bold">카카오톡</p>
            <div className="flex flex-wrap justify-center w-full mb-2">
              {manualItems.filter(item => item.category === '카카오톡').map(item => (
                <Link key={item.id} href={`/manual/${item.id}`} className="w-full md:w-72 mt-2 mx-1">
                  <div className="h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600 text-white rounded-lg text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5]">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 일상 항목 */}
          <div className="flex flex-col items-start mt-5 h-full bg-slate-100 rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:shadow-lg dark:bg-gray-900">
            <p className="mt-2 text-2xl text-[#136BFF] font-bold">일상</p>
            <div className="flex flex-wrap justify-center w-full">
              {manualItems.filter(item => item.category === '일상').map(item => (
                <Link key={item.id} href={`/manual/${item.id}`} className="w-full md:w-72 mt-2 mx-1">
                  <div className="h-10 bg-gradient-to-r from-green-400 to-green-500 dark:from-green-500 dark:to-green-600 text-white rounded-lg text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5] hover:text-white">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualPage;
