import { CustomTypography } from "../Typography/Typography";

export const CarCharacteristicItem = ({ keys, value }) => {
  return keys === "Название парка" ? (
    <div className="w-[359px] pt-[14px] pt-[24px] flex justify-between text-xl leading-4">
      <CustomTypography>{keys}</CustomTypography>
      <CustomTypography>{value}</CustomTypography>
    </div>
  ) : (
    <div className="border-b-2 w-[359px] pb-[14px] pt-[24px] flex justify-between text-xl leading-4">
      <CustomTypography>{keys}</CustomTypography>
      <CustomTypography>{value}</CustomTypography>
    </div>
  );
};
