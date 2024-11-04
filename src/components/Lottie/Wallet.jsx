import AnimationComponent from "./AnimationComponent";
import { wallet } from "./AnimationAsset";

const WalletPage = () => {
    return (
        <div className="page-container flex justify-center items-center p-4 md:p-8">
            <AnimationComponent
                animationData={wallet}
                width="100%" // Full width on smaller screens
                height="100%" // Full height on smaller screens
                style={{
                    maxWidth: "300px", // Max width for small screens
                    maxHeight: "300px", // Max height for small screens
                }}
                className="w-60 h-90 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[600px] lg:h-[600px]"
            />
        </div>
    );
};

export default WalletPage;
