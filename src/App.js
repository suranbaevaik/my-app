import React from "react";
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

const App = () => {
    return(
        <>
            <div className="w3-content" style={ {maxWidth:"1400px"} }>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <Introduction/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App;