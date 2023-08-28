import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    // get location path
    const { pathname } = useLocation();
    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        });
    }, [pathname]);
    return false;
}