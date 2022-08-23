import React from "react";
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import State from "./components/State";
import Number from "./components/Number";
import Value from "./components/Value";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Text from "./components/Text";


const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
            {/*<State/>
            <Number/>
            <Value/>*/}
            {/*<Alert
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
            <Button
                text="Primary"
                backgroundColor="#0d6efd"
                color="#ffffff"
            />
            <Button
                text="Secondary"
                backgroundColor="#6c757d"
                color="#ffffff"
            />
            <Button
                text="Success"
                backgroundColor="#198754"
                color="#ffffff"
            />
            <Button
                text="Danger"
                backgroundColor="#dc3545"
                color="#ffffff"
            />
            <Button
                text="Warning"
                backgroundColor="#ffc107"
                color="#000004"
            />
            <Button
                text="Info"
                backgroundColor="#0dcaf0"
                color="#000004"
            />
            <Button
                text="Light"
                backgroundColor="#f8f9fa"
                color="#000004"
            />
            <Button
                title="Link"
                backgroundColor="lightblue"
            />
            <Text/>*/}
        </>
    )
}

export default App;