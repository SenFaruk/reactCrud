import Event from "./components/Event";
import Header from "./components/Header";
import MapFunction from "./components/MapFunction";
import UseStateHook from "./components/UseStateHook";



function App() {
  const clickMe=(adın)=>{
    console.log("ismin:"+adın);
  }
  return (
    <>
    <div className="App">
  <Header/>
  <button onClick={()=>clickMe("faruk")}>clickme</button>
    </div>
    <Event/>
    <UseStateHook/>
    <MapFunction/>
    </>
  );
}

export default App;
