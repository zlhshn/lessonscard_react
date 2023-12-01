import Header from "./components/Header";
import Card from  "./components/Card";

import "./scss/app.scss";
import data from "./data"


function App() {
  return (
   <>
   <Header/>
   <Card data = {data} />
   </>
  );
}

export default App;
