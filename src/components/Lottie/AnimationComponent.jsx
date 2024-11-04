// src/components/AnimationComponent.js

import { useLottie, useLottieInteractivity } from "lottie-react";
// import { useEffect } from "react";

const AnimationComponent = ({ animationData, width, height, loop= true, autoplay= true }) => {
   
    // useEffect(() => {
    //     console.log("Animation data updated:", animationData);
    // }, [animationData]);

    const options = {
        animationData,
        loop: typeof loop === "boolean" ? loop : true,
        autoplay: typeof autoplay === "boolean" ? autoplay : true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    

    // const lottieObj = useLottie(options);

    // const InteractiveView = useLottieInteractivity({
    //     lottieObj,
    //     mode: "seek",
    //     actions: [
    //         {
    //             visibility: [0, 1],
    //             type: "seek",
    //             frames: [0, 100],
    //         },
    //     ],
    // });
    
const {View} =useLottie(options);

    return (
        <div style={{ width: width || 400, height: height || 200 }} className="p-4 rounded-md">
            {View}
        </div>
    );
};

export default AnimationComponent;
