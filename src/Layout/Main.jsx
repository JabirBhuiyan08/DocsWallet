import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
// import LogoAnimation from "../Animation";
// import { useState } from "react";



const Main = () => {
    //Todo : Add loading animation.
    // const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <div>
             {/* {!animationComplete && <LogoAnimation onComplete={() => setAnimationComplete(true)} />} */}

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;