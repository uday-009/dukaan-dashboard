import React from 'react';
import ProfileImage from '../assets/Image.png'
import Vector from '../assets/icons/Vector.svg'
import downArrow from '../assets/icons/downarrow.svg'
import { sidebar } from './sidebarData';

const SideBar = () => {
  return (


<aside id="logo-sidebar" className="fixed lg:sticky top-0 left-0 z-40 w-full lg:max-w-[224px] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-2 py-4 overflow-y-auto bg-secondary-700 dark:bg-gray-800 text-white  flex flex-col justify-between">
    <div>

      <a href="#" className="flex items-center ps-2.5 mb-5 justify-between">
         <img src={ProfileImage} className="w-[39px] h-[39px] rounded-[4px] m-[0.5px]"  alt="Logo" />
         <span className="self-center text-xl  whitespace-nowrap dark:text inline-flex flex-col w-[108px] justify-center gap-1">
            <span className="title font-medium text-[15px] leading-[22px]">
                Nishyan
            </span>
            <span className="title underline text-[#d2d4d9] text-[14px] leading-[16px]">
                Visit store
            </span>
         </span>
         <span className="downarrow h-[20px] w-[20px] flex items-center ">
            <img src={downArrow} className='h-[9px] w-[15px]' />
         </span>
      </a> 
        <ul className="font-medium sidebar-list">
            {
                sidebar.map(({title, svg}) => (
                    <li key={title + "-sidebar"}>
                        <a href="#" className="flex items-center py-2 px-4 text-[#D2D4D9] rounded-[4px] dark:text-white hover:bg-[#FFF]/10 dark:hover:bg-gray-700 group h-[36px]">
                            {svg}
                            <span className="ms-3 text-[14px] font-medium"> {title} </span>
                        </a>
                    </li>
                ))
            }       
        </ul>
    </div>

        <div className='p-2 pb-0'>
            
            <a href="#" className="flex items-center ps-3 py-1.5  justify-start bg-[#353C53] gap-3 rounded-[4px]">
            <span className="h-[36px] w-[36px] bg-[#ffffff1a] flex justify-center items-center rounded-[4px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <g id="710e474f">
                    <path id="8a60691c" fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z" fill="white"></path>
                </g>
                </svg>
            </span>
            <span className="self-center text-xl  whitespace-nowrap dark:text inline-flex flex-col w-[108px] justify-center gap-1">
                <span className="title font-normal text-[13px] font-light">
                    Available credits
                </span>
                <span className="title font-medium text-white text-[16px] leading-[16px]">
                    224.10
                </span>
            </span>
            
        </a> 
        </div>
   </div>
</aside>


  )
}

export default SideBar
