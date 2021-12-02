import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Footer from './Components/Footer/Footer.js'
import ListItems from './Components/ListItems/ListItems';




function App() {
  //JSX 
  return (
    <div className="App">
      <NavBar />
      <ListItems/>
      <Footer />
     
    </div>
  );
}

export default App;
