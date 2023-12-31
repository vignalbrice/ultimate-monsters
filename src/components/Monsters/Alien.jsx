/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Alien.gltf --output src/components/Alien.jsx -r public
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useAnimationOnHover from "../../hooks/useAnimationOnHover";

export function Alien({ hovered, Animations, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Alien.gltf");
  const { actions } = useAnimations(animations, group);
  const anim = hovered ? Animations.Punch : Animations.Idle;
  useAnimationOnHover(actions, anim);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Alien">
            <skinnedMesh
              name="Cube116"
              geometry={nodes.Cube116.geometry}
              material={materials.Alien_Main}
              skeleton={nodes.Cube116.skeleton}
            />
            <skinnedMesh
              name="Cube116_1"
              geometry={nodes.Cube116_1.geometry}
              material={materials.Alien_Secondary}
              skeleton={nodes.Cube116_1.skeleton}
            />
            <skinnedMesh
              name="Cube116_2"
              geometry={nodes.Cube116_2.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube116_2.skeleton}
            />
            <skinnedMesh
              name="Cube116_3"
              geometry={nodes.Cube116_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube116_3.skeleton}
            />
            <skinnedMesh
              name="Cube116_4"
              geometry={nodes.Cube116_4.geometry}
              material={materials.Tongue}
              skeleton={nodes.Cube116_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Alien.gltf");
