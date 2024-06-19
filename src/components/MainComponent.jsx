import React from "react";
import RevenueCard from "./RevenueCard";
import CountCard from "./CountCard";
import DataTable from "./DataTable";

const MainComponent = () => {
  return (
    <div className="w-full">
      {/* header */}
      <header class="sticky top-0 z-40 flex justify-between items-center w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <div class="flex items-center justify-start gap-4 w-full px-8 py-[21px] mx-auto max-w-8xl">
            <h5 className="text-xl text-[#1A181E] font-normal ">Payouts</h5>
            <span  className="text-[#4D4D4D] inline-flex gap-1 justify-center items-center">
                <span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    // className="size-6"
                    opacity={0.8}
                    height={16}
                    width={16}
                    >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                    </svg>
                </span>
                <span className="text-sm"> How it works </span>
            </span>
        </div>
        <div className="flex items-center justify-center w-full px-3 py-3 mx-auto max-w-8xl lg:px-4">
            
     
        
            <div class="relative text-[#808080]">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none border-none bg-[#F2F2F2] rounded-[6px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="b41fb3ed" clip-path="url(#e412740b)">
                        <g id="539e58f4">
                        <path id="f3f3581e" d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"></path>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="e412740b">
                        <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                    </defs>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-[400px] h-[40px] p-4 ps-10  text-[#808080]   focus:ring-none  focus:border-none  focus-visible:ring-none  focus-visible:border-none outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#808080] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#F2F2F2] rounded-[6px]" placeholder="Search features, tutorials, etc." required />
                
            </div>
   
        </div>
        <div className="flex items-center justify-end gap-2 w-full px-3 py-3 mx-auto max-w-8xl lg:px-4">
            
        <span className="h-[40px] w-[40px] rounded-3xl bg-[#E6E6E6] text-[#4D4D4D] flex justify-center items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="78c01e55">
                <g id="ed25e47d">
                <path id="5eb97dd9" d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"></path>
                </g>
            </g>
            </svg>
            </span>
            <span className="h-[40px] w-[40px] rounded-3xl bg-[#E6E6E6] text-[#4D4D4D] flex justify-center items-center">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="38fa81db" d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z" fill="#4D4D4D"></path>
                </svg>
            </span>
    
            </div>
      </header>
      {/* main component */}

      <div className="p-8 bg-[#F2F2F2]">
        <div className="flex justify-between items center w-full">
            <h5 className="font-medium text-[20px]">
                Overview
            </h5>
            <button className="h-[36px] w-[137px] border border-[#E6E6E6] text-[#4D4D4D] rounded-[4px] flex justify-between items-center px-[14px] py-[6px]">
                <span> Last Month </span> 
                <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="486d071d">
                        <path id="db0b2425" d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"></path>
                    </g> 
                    </svg>
                </span>
            </button>
        </div>
        <div className="flex gap-8 pt-6 pb-8">
            <RevenueCard title={"Next Payout"} orderCount={23} amount={"2,312.23"} highlighted={true} />
            <RevenueCard title={"Amount received"} orderCount={23} amount={"23,992,312.19"} />
            <CountCard title={"Online orders"} orderCount={231}  />
        </div>
        <div>
            <div className="head flex flex-col gap-6">
                <h5>Transactions | This Month </h5>
                <div className="flex gap-3">   
                    <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full text-gray-700">
                        Payouts (22)
                    </button>
                    <button className="px-4 py-[6px] bg-primary-700 text-[#FFF] rounded-full">
                        Refunds (6)
                    </button>
                </div>
            </div>
            <div>
                <DataTable />
            </div>
            <div className="flex justify-center items-center p-8 text-gray-700">
                <p>
                    Made with ❤️ by <a href="https://x.com/UdayMaroju" target="_blank" className="font-medium underline pointer">Uday Maroju</a>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
