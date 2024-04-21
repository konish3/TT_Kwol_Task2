import React, { useState } from "react";
import { CustomButton } from "../../_shared/Button/Button";
import { CustomTypography } from "../../_shared/Typography/Typography";

export const Dropdown = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    price: "1650",
    days: "7 раб. / 0 вых.",
  });

  const handleDropdownClick = (e) => {
    setDropdownState(!dropdownState);
    if (e.target.textContent) {
      const arr = e.target.textContent.split("₽");
      setSelectedItem({ price: arr[0], days: arr[1] });
    }
  };

  return (
    <div className="bg-[#EFEEEE] rounded-[16px] px-[15px] pt-[12px] pb-[19px] flex justify-between mb-[9px]">
      <div className="">
        <CustomTypography className="font-bold text-2xl leading-6 mb-[10px]">
          {selectedItem.price} ₽
        </CustomTypography>
        <CustomTypography className="text-sm leading-3">
          {selectedItem.days}
        </CustomTypography>
      </div>
      <div className="flex flex-col justify-center relative">
        <CustomButton type="button" className="" onClick={handleDropdownClick}>
          <svg
            width="28"
            height="12"
            viewBox="0 0 28 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.86 11.4457C11.7453 11.4471 11.6315 11.4249 11.526 11.3806C11.4206 11.3363 11.3257 11.2709 11.2476 11.1886L3.37358 3.47429C3.02362 3.13143 3.02362 2.6 3.37358 2.25714C3.72353 1.91429 4.26597 1.91429 4.61592 2.25714L11.8775 9.37143L19.1216 2.27429C19.4716 1.93143 20.014 1.93143 20.364 2.27429C20.7139 2.61714 20.7139 3.14857 20.364 3.49143L12.4899 11.2057C12.315 11.3771 12.0875 11.4629 11.8775 11.4629L11.86 11.4457Z"
              fill="black"
            />
          </svg>
        </CustomButton>
        {dropdownState && (
          <div className="w-44 bg-white rounded-[10px] border-2 border-[#fde047] px-[15px] py-[10px] absolute top-[-110px] left-[-140px]">
            <ul>
              <li
                className="border-b-2 border-[#fde047]"
                onClick={handleDropdownClick}
              >
                1650 ₽ 7 раб. / 0 вых.
              </li>
              <li onClick={handleDropdownClick}>3650 ₽ 5 раб. / 2 вых.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
