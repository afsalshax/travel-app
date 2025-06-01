import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroltop() {
     const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top
  }, [pathname]);
  return null;
}

export default Scroltop