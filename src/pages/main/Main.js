import React from 'react';
import BlogEntries from "../../components/BlogEntries";
import IntroductionMenu from "../../components/IntroductionMenu";
import Footer from "../../components/Footer";

const Main = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Main;