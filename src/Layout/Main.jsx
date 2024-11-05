import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation(); // Use the useLocation hook to get the current location

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="sticky top-0 z-10">
                {!noHeaderFooter && <NavBar />} {/* Use conditional rendering to hide/show NavBar */}
            </div>
            <Outlet />
            {!noHeaderFooter && <Footer />} {/* Use conditional rendering to hide/show Footer */}
        </div>
    );
};

export default Main;
