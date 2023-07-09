import { useEffect } from "react";

const useAnimationOnHover = (actions, anim) => {
  useEffect(() => {
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim]?.fadeOut(0.5);
  }, [anim]);
};

export default useAnimationOnHover;
