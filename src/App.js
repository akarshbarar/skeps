import './App.css';
import {useState, useEffect}  from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';


function App() {
  const [title, setTitle] = useState("POS Financing Soutions");
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="App">
       <Router>        
        <Switch>
          <Route exact path="/" component = {Home}></Route>
          <Route path="*" component = {Error}></Route>
  
        </Switch>
    </Router>
    </div>
  );
}

export default App;
