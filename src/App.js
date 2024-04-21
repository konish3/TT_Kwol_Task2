import { CarDescription } from "./components/СarDescription/CarDescription";
import { Payment } from "./components/Payment/Payment";
import { Images } from "./components/Images/Images";
import { AboutPark } from "./components/AboutPark/AboutPark";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F6F4F2]">
      <div className="mr-[74px] w-[70px] bg-[#FDE000] h-screen relative">
        <div className="bg-[#FDE000] rounded-full w-[109px] h-[109px] absolute top-[100px] left-[10px] flex justify-center items-center">
          <div className="border-[1px] border-white rounded-full w-[71px] h-[71px] top-[10px] left-[10px] flex justify-center items-center">
            <svg
              width="22"
              height="40"
              viewBox="0 0 22 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4319 1.17738C19.6755 1.17442 19.917 1.22217 20.1409 1.31754C20.3648 1.4129 20.5661 1.55378 20.7319 1.73111C21.4748 2.46944 21.4748 3.61383 20.7319 4.35215L5.31763 19.6723L20.7319 34.9555C21.4748 35.6939 21.4748 36.8382 20.7319 37.5766C19.9891 38.3149 18.8376 38.3149 18.0948 37.5766L1.41763 20.9274C0.674774 20.1891 0.674774 19.0447 1.41763 18.3064L18.1319 1.73111C18.5033 1.36195 18.9862 1.17738 19.4319 1.17738Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mr-[70px]">
        <CarDescription></CarDescription>
        <Payment></Payment>
      </div>
      <div className="flex flex-col items-center justify-start mt-[-40px]">
        <Images></Images>
        <AboutPark></AboutPark>
      </div>
    </div>
  );
}
