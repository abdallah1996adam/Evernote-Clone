import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "./pages/partials/Navbar";
import Favorites from "./pages/favorites"
import NoteDetails from './pages/noteDetails'
import EditNote  from './pages/editNote' 


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/favorites' component={Favorites}/>
        <Route exact path="/note/:id" component={NoteDetails}/>
        <Route exact path="/editnote/:id" component={EditNote}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
