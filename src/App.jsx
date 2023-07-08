import { Logo } from "@pmndrs/branding";
import { Canvas } from "@react-three/fiber";
import { Fragment } from "react";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Fragment>
      <Canvas
        shadows="soft"
        camera={{ position: [0, 0, 10], fov: 30 }}
        gl={{ preserveDrawingBuffer: true, localClippingEnabled: true }}
        eventPrefix="client"
      >
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      <div style={{}}>
        <a
          href="https://pmnd.rs/"
          style={{
            position: "absolute",
            bottom: 40,
            left: 90,
            fontSize: "13px",
          }}
        >
          pmnd.rs
          <br />
          dev collective
        </a>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
          }}
        >
          Vignal Brice - 08/07/2023
        </div>
        <Logo
          style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
        />
      </div>
    </Fragment>
  );
}

export default App;
