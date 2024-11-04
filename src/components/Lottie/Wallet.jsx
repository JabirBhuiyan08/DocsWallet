import { useEffect, useState } from "react";
import AnimationComponent from "./AnimationComponent";
import { wallet } from "./AnimationAsset";

const WalletPage = () => {
    const [animationKey, setAnimationKey] = useState(Date.now()); 

    useEffect(() => {
        setAnimationKey(Date.now()); 
    }, []);

    return (
        <div className="page-container">
            <AnimationComponent
                key={animationKey} 
                animationData={wallet}
                width={400}
                height={300}
            />
        </div>
    );
};
export default WalletPage;
