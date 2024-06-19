import React from "react";

const RevenueCard = ({ title, orderCount, amount, highlighted }) => {
  return (
    <>
      {highlighted ? (
        <div
          className={`shadow-md h-fit min-w-[300px] rounded-[8px] flex-1 bg-primary-700 hover:bg-[#0E4F82] `}
        >
          <div className="  p-5 flex flex-col gap-4 ">
            <h5 className="text-[#FFF] flex gap-2 items-center">
              <span>{title}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                  opacity={0.8}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
            </h5>

            <div className="flex justify-between items-center">
              <div className="text-3xl font-medium text-white">
                {" "}
                ₹ {amount}{" "}
              </div>
              {orderCount ? (
                <div className="flex text-white underline">
                  {" "}
                  <p>{orderCount} order(s)</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </p>{" "}
                </div>
              ) : null}
            </div>
          </div>
          {highlighted && (
            <div className="bg-[#0E4F82] rounded-[8px] px-6 py-2 bg-[#0E4F82] text-[#F2F2F2]">
              <h5 className="text-[#FFF] flex gap-2 items-center justify-between m-0">
                <span>{"Next Payment Date:"}</span>
                <span>Today, 3:00PM</span>
              </h5>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`shadow-md h-fit min-w-[300px] rounded-[8px] flex-1 bg-white`}
        >
          <div className="  p-5 flex flex-col gap-4 ">
            <h5 className="text-[#4D4D4D] flex gap-2 items-center">
              <span>{title}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                  opacity={0.8}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
            </h5>

            <div className="flex justify-between items-center">
              <div className="text-3xl font-medium">
                {" "}
                ₹ {amount}{" "}
              </div>
              {orderCount ? (
                <div className="flex text-primary-700 underline">
                  {" "}
                  <p>{orderCount} order(s)</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </p>{" "}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RevenueCard;
