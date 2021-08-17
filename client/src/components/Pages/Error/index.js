import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

export default function ErrorPage({ setPage }) {
  let countdownValue = 5;

  const returnHome = () => {
    clearInterval(interval);
    setPage("home");
  };

  const interval = setInterval(() => {
    console.log("hi");
    if (countdownValue === 0) {
      returnHome();
    } else {
      const countdownElem = document.querySelector("#red-countdown");
      countdownElem.innerText = countdownValue;
      countdownValue -= 1;
    }
  }, 1000);

  return (
    <div className="error">
      <h1>ERROR! Something went wrong.</h1>
      <p>
        You will be redirected to <b>Home page</b> in{" "}
        <span id="red-countdown"></span>
      </p>
      <p>You can instead click the button below to redirect immediately.</p>
      <button onClick={returnHome}>Return to Home page</button>
    </div>
  );
}
