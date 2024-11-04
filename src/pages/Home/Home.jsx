import Wallet from "../../components/Lottie/Wallet";
import TopBar from "./TopBar";
import Calculator from "./Calculator";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 mx-auto max-w-screen-xl">
      <div className="flex flex-col-reverse w-full -mt-15 md:flex-row items-center  justify-between">
        <div>
          <TopBar />
        </div>
        <div className="w-full flex justify-center md:w-1/2 -mb-16">
          <Wallet />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <Calculator />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl font-bold">Calculator</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
