import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function About() {
  const [seconds, setSeconds] = useState(5);

  const navigate = useNavigate(1);
  setTimeout(() => {
    navigate("/");
  }, 5000);

  function incrementSeconds() {
    setSeconds(seconds - 1);
  }

  var cancel = setInterval(incrementSeconds, 1000);
  return (
    <>
      <div className="App">
        <main
          className="Error"
          style={{
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <h1>Error - 404</h1>
          <a href="/" className="link">
            <span>Return to homepage in ( {seconds} )</span>
          </a>
        </main>
      </div>
    </>
  );
}
