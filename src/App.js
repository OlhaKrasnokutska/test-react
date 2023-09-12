import React from "react";
import Header from "./Header";
import Notification from "./Notification";
import Projects from "./Projects";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <Header />
        <Notification />
        <Projects />
        <Footer />
        </div>
    );
}

export default App;