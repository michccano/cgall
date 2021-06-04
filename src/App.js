import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";

import "./css/Landingpage.css";
import Landingpage from "./Landingpage";
import { Route, Link , HashRouter  } from "react-router-dom";
import Userproflie from "./Userproflie";
import Singleart from "./Singleart";
import "./css/responsive.css";
import GalleryPage from "./GalleryPage";
import MarketPage from "./MarketPage";
import ActivityPage from "./ActivityPage";

import HomePage from "./HomePage";


function App() {
    return (
        <HashRouter>
        <>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sell_your_artwork" component={Landingpage}/>
            <Route exact path="/Userproflie" component={Userproflie} />
            <Route exact path="/Singleart" component={Singleart} />
            <Route exact path="/Gallery" component={GalleryPage}/>
            <Route exact path="/Market" component={MarketPage}/>
            <Route exact path="/Activity" component={ActivityPage}/>

        </>
        </HashRouter>
    );
}

export default App;
