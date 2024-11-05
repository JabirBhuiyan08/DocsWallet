import { punchGuy } from "./AnimationAsset";
import AnimationComponent from "./AnimationComponent";

const PunchGuy = () => {
    return (
        <div className="page-container flex justify-center items-center p-4 md:p-8">
            <AnimationComponent
                animationData={punchGuy}
                width="100%" // Full width on smaller screens
                height="100%" // Full height on smaller screens
               
                // className="w-60 h-90 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[600px] lg:h-[600px]"
                />
        </div>
    );
};

export default PunchGuy;