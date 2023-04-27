import { useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./scenes/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <>
      <div className="app">
        <Navbar />
      </div>
  </>
  )
}

export default App;
