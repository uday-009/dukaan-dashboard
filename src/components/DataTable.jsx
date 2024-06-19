import React from 'react'
import { tableData } from './tabledata'

const DataTable = () => {

    const data = Array(10).fill(tableData[0]);

  return (
   

<div class="relative overflow-x-auto p-4 bg-white shadow-sm mt-8 flex flex-col gap-6 rounded-[4px]">
    <div className="flex justify-between w-full">

        <div class="relative text-[#808080] border border-[1px] inline-flex rounded-[4px] max-w-[300px] flex-grow ">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none border-none bg-[#FFF] rounded-[6px]">
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
            <input type="search" id="default-search" className="block w-[400px] h-[40px] p-4 ps-10  text-[#808080]   focus:ring-none  focus:border-none  focus-visible:ring-none  focus-visible:border-none outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#808080] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#FFF] rounded-[6px]" placeholder="Search by order ID..." required />
            
        </div>
        <div className="flex justify-between gap-2">
        <button className="px-4 py-[6px] bg-white border border-[#D9D9D9]  rounded-[4px] text-gray-700 flex items-center gap-1">
            <span> Sort </span>
            <span className="sort-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="8dd74973">
                    <g id="571b118c">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z" fill="#4D4D4D"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z" fill="#4D4D4D"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z" fill="#4D4D4D"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z" fill="#4D4D4D"></path>
                    </g>
                </g>
                </svg>
            </span>
        </button>
        <button className="px-4 py-[6px] bg-white border border-[#D9D9D9]  rounded-[4px] text-gray-700">
            <span className="sort-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="6949785e" d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37149 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"></path>
                </svg>
            </span>
        </button>

        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 capitalize font-medium">
                    Order Id
                </th>
                <th scope="col" class="px-6 py-3 capitalize font-medium">
                Order date
                </th>
                <th scope="col" class="px-6 py-3 capitalize font-medium text-end">
                Order amount 
                </th>
                <th scope="col" class="px-6 py-3 capitalize font-medium flex gap-1 justify-end">
                <span>
                    Transaction fees 
                    </span> 
                    <span>

                     {<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="3d0cd4b1">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83275 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D"></path>
                        </g>
                    </svg>}
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(d => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    
                    <td class="px-6 py-4">
                       { d.id}
                    </td>
                    <td class="px-6 py-4">
                        {d.date}
                    </td>
                    <td class="px-6 py-4 text-end">
                        {d.amount}
                    </td>
                    <td class="px-6 py-4 text-end">
                        {d.fees}
                    </td>
                </tr>
                ))
            }
           
            
        </tbody>
    </table>
    <div class="flex justify-center gap-2 items-center">
        <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="67388360">
            <path id="b9468c12" fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z" fill="#4D4D4D"></path>
        </g>
        </svg>
            Previous
        </a>
        <span className='inline-flex gap-1 text-[#d2d2d2] text-[14px]'>

            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                1
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                ...
            </button>
            <button className="p-1  bg-primary-700  border-none  rounded-[4px] text-white w-[28px]">
                10
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                11
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                12
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                13
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                14
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                15
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                16
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                17
            </button>
            <button className="p-1 bg-white border-none  rounded-[4px] text-gray-700 w-[28px]">
                18
            </button>
        </span>
        <a href="#" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="867a62c9">
                <path id="f6baed42" fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D"></path>
            </g>
            </svg>
        </a>
    </div>
</div>

  )
}

export default DataTable
