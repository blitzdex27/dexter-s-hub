import Home from "./Home";
import Signup from "./Auth/Signup";
import ErrorPage from "./Error";

export default function Page({ page }) {
  const { currentPage, setCurrentPage } = page;

  switch (currentPage) {
    case "home":
      return <Home />;
    case "signup":
      return <Signup setPage={setCurrentPage} />;
    case "error":
      return <ErrorPage setPage={setCurrentPage} />;

    default:
      return <Home />;
  }
}
