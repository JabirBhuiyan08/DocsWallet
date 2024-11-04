import { punchGuy } from "./AnimationAsset";
import AnimationComponent from "./AnimationComponent";

const PunchGuy = () => {
    return (
        <div className="page-container">
            <AnimationComponent
                animationData={punchGuy}
                width={400}
                height={300}
            />
        </div>
    );
};

export default PunchGuy;