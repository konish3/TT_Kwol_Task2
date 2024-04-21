import { CustomButton } from "../../_shared/Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { H3 } from "../../_shared/H3/H3";

export const Payment = ({ ...props }) => {
  return (
    <div
      {...props}
      className="drop-shadow-2xl bg-white rounded-[26px] py-[16px] px-[12px] mt-[17px]"
    >
      <H3 className="text-xl leading-4 font-bold text-center mb-[38px]">
        Выберите стоимость и схему дней
      </H3>
      <Dropdown />
      <CustomButton className="bg-[#FDE000] rounded-[16px] w-full py-[19px] text-xl leading-5">
        Забронировать
      </CustomButton>
    </div>
  );
};
