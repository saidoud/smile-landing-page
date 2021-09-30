import { useEffect } from "react";
import Aos from "aos";

function useAnimation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
}

export default useAnimation;
