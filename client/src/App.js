import { useState } from "react";
import Navigation from "./components/Navigation";
import Page from "./components/Pages";

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <Navigation page={{ currentPage, setCurrentPage }} />
      <Page page={{ currentPage, setCurrentPage }} />
    </div>
  );
}

export default App;
