
import './App.css';
import Card from './component/Card/Card';
import Data from "./data.json"

function App() {

  const bg = {
   backgroundColor:"purple",
   textAlign:"center",
   padding:"15px",
   margin:"15px",
   color:"white"
  }

//   let items = [];
  // for (let i = 0; i < Data.length; i++) {
  //  item.push( <Card textTile={Data[i].Title} desText = {Data[i].Des}></Card>)
  // }

// items = Data.map((item)=> <Card textTile={item.Title} desText = {item.Des}></Card>);

  return (
    <div className="App">
     <h1 style={bg}>Mapping Data to Component</h1>
     {Data.map((item)=> <Card textTile={item.Title} desText = {item.Des}></Card>)}
    </div>
  );
}

export default App;
