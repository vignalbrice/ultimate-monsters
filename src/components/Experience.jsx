import { CameraControls, Environment, useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Fragment, useEffect } from "react";
import { useRef, useState } from "react";
import * as THREE from "three";
import { monsters } from "../data/monsters";
import Portal from "./Portal/Portal";
import Title from "./Title/Title";

export const Experience = () => {
  /* Experience Component - Render a sphere geometry with a texture map
   *  and a background image. The background image is a 360 degree panorama
   *  of the anime cactus world. The sphere geometry is a skybox that
   *  surrounds the camera and the scene. The skybox is textured with the
   *  same image as the background. The skybox is rendered on the backside
   *  of the sphere geometry so that the camera is always inside the sphere
   *  geometry and the background image is always visible.
   */

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <Fragment>
      <ambientLight intensity={0.5} />
      <Environment preset="studio" />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        makeDefault
        minAzimuthAngle={-Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 2.5}
        maxDistance={10}
      />
      <Title>ULTIMATE MONSTERS</Title>
      {monsters.map(({ Monster, ...m }, i) => (
        <Portal
          texture={m.texture}
          name={m.name}
          color={m.color}
          active={active}
          setActive={setActive}
          hovered={hovered}
          setHovered={setHovered}
          position-x={m.positionX}
          rotation-y={m.rotationY}
          key={i}
        >
          <Monster
            scale={0.6}
            position-y={-1}
            hovered={hovered === m.name}
            Animations={m.Animations}
          />
        </Portal>
      ))}
    </Fragment>
  );
};
