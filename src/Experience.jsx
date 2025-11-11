import {
  Text,
  Html,
  Float,
  Environment,
  PresentationControls,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <>
      <Environment preset="city" />
      <color args={["#0e1117"]} attach="background" /> {/* fundo escuro elegante */}

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[0, Math.PI / 8]} // limita o movimento vertical
        azimuth={[-1, 0.75]}
        damping={0.1}
        snap
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#0e1117"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              rotation-x={-0.256}
              position={[0, 1.56, -1.4]}
              occlude={false}
              zIndexRange={[100, 0]}
            >
              <iframe
                src="/portfolio/index.html"
                style={{
                  width: "1024px",
                  height: "640px",
                  border: "none",
                  borderRadius: "10px",
                  pointerEvents: "auto",
                  backgroundColor: "#0e1117",
                }}
              />
            </Html>
          </primitive>

          <Text
            font="./Bangers-Regular.ttf"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
          >
            ARTHUR{"\n"}CANZIAN
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
    </>
  );
}
