import bridgeKeeper from "../assets/bridgekeeper.webp";

export function Greeting() {
  return (
    <>
      <img
        src={bridgeKeeper}
        alt="The wizened bridgekeer, as last seen in Scene 24"
      />
      <p>
        Stop! Who would cross the Bridge of Death must answer me questions three{" "}
        <small>(correctly out of five)</small>, ere the other side he see!
      </p>
    </>
  );
}
