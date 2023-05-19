import * as React from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";


function App() {
    const buttonName = "Some Button func";
    
        return (
            <>
                <Header buttonName={buttonName}/>
                <Main />
            </>
        );
}

export default App;