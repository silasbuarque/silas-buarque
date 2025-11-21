import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#717378",
      }}
    >
      <p>Silas Buarque</p>
    </div>
  );
}

export default Home;
