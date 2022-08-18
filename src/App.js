import React from "react";
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import State from "./components/State";
import Number from "./components/Number";
import Value from "./components/Value";
import Alert from "./components/Alert";


const App = () => {
    return (
        <>
            {/*<div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
            <State/>
            <Number/>
            <Value/>*/}
            <Alert
                text="A simple primary alert—check it out!"
                backgroundColor="#cfe2ff"
                color="#0842a5"
            />
            <Alert
                text="A simple secondary alert—check it out!"
                backgroundColor="#e2e3e5"
                color="#41464b"
            />
            <Alert
                text="A simple success alert—check it out!"
                backgroundColor="#d1e7dd"
                color="#0f517f"
            />
            <Alert
                text="A simple danger alert—check it out!"
                backgroundColor="#f8d7da"
                color="#664d6c"
            />
            <Alert
                text="A simple warning alert—check it out!"
                backgroundColor="#fff3cd"
                color="#664d16"
            />
            <Alert
                text="A simple info alert—check it out!"
                backgroundColor="#cff4fc"
                color="#465160"
            />
            <Alert
                text="A simple light alert—check it out!"
                backgroundColor="#fefefe"
                color="#323232"
            />
            <Alert
                text="A simple dark alert—check it out!"
                backgroundColor="#d3d3d4"
                color="#323232"
            />
        </>
    )
}

export default App;