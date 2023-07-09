import React from "react";
import { Text } from "@react-three/drei";

const Title = ({ children }) => {
  return (
    <Text
      font="fonts/Caprasimo/Caprasimo-Regular.ttf"
      fontSize={0.3}
      position={[0, 2.1, 0.051]}
      anchorY={"top"}
    >
      {children}
      <meshBasicMaterial color={"#333"} toneMapped={false} />
    </Text>
  );
};

export default Title;
