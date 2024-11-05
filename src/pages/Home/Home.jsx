import Wallet from "../../components/Lottie/Wallet";
import TopBar from "./TopBar";
import Calculator from "./Calculator";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import MiddelBar from "./MiddelBar";
import PunchGuy from "../../components/Lottie/PunchGuy";

const Home = () => {
    const { isDarkTheme, toggleTheme } = useTheme(); // Access theme context


  return (
    <div className={`flex flex-col items-center p-4 md:p-8 mx-auto max-w-screen-xl ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col-reverse w-full -mt-16 md:mt-0 md:flex-row items-center  justify-between mb-8">
        <div>
          <TopBar />
        </div>
        <div className="w-full flex justify-center md:w-1/2 -mb-16">
          <Wallet />
        </div>
      </div>
      <MiddelBar />
      <div className="flex flex-col md:flex-row justify-center justify-between items-center w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <Calculator />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl text-center font-bold">Calculator</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
