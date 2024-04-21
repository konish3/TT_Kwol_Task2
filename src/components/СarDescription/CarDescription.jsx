import { CAR_CHARACTERISTICS } from "../../helpers/carCharacteristic/carCharacteristic";
import { H3 } from "../../_shared/H3/H3";
import { CarCharacteristicItem } from "../../_shared/CarCharacteristicItem/CarCharacteristicItem";

export const CarDescription = () => {
  return (
    <div className="flex flex-col items-center px-[20px] py-[40px] drop-shadow-2xl bg-white rounded-[26px]">
      <H3 className="font-bold text-2xl mb-[76px] leading-6">
        Kia Presto 2019
      </H3>
      <div className="flex flex-col">
        {Object.entries(...CAR_CHARACTERISTICS).map(([key, value]) => {
          return (
            <CarCharacteristicItem
              keys={key}
              value={value}
            ></CarCharacteristicItem>
          );
        })}
      </div>
    </div>
  );
};
