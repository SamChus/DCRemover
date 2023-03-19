import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import { useState } from 'react';







function App() {
  const [value, setValue] = useState([])
  const [page, setPage] = useState("screen1")
  



  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (value.trim()) {
      setPage("screen2")

    }else{
      alert("Provide a non-empty value")
    }

}
  return (
    <div className="App">
      {page === "screen1" ? <Screen1 
        value={value}
        setValue={setValue}
        onsubmit={handleSubmit}
      /> : <Screen2 value={value}/>}
    </div>
  );
}

export default App;
