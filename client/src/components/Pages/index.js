import Home from "./Home";
import Signup from "./Auth/Signup";

export default function Page({ page }) {
  const { currentPage } = page;

  switch (currentPage) {
    case "home":
      return <Home />;
    case "signup":
      return <Signup />;

    default:
      return <Home />;
  }
}
