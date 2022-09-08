import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Form from "./pages/form/Form";
import PopularPosts from "./pages/popularPosts/PopularPosts";
import Posts from "./pages/posts/Posts";
import Tags from "./pages/tags/Tags";
import Header from "./components/Header";
import NotFound from "./pages/notFound/NotFound";
import Catalog from "./pages/catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";
import Watch from "./pages/Watch/Watch";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/popular_posts" element={<PopularPosts/>}/>
                <Route path="/tags" element={<Tags/>}/>
                <Route path="/catalog" element={<Catalog/>}>
                    <Route path="iphone" element={<Iphone/>}/>
                    <Route path="ipad" element={<Ipad/>}/>
                    <Route path="watch" element={<Watch/>}/>
                </Route>
                <Route path="shopping_cart" element={<ShoppingCart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;


/*localhost:3000/ - base_url, domen
localhost:3000/catalog - Header, Catalog
localhost:3000/ - Header, Main
localhost:3000/about - Header, About
localhost:3000/main - Header, NotFound*/

/*localhost:3000/catalog/iphone - Catalog, Iphone
localhost:3000/catalog/ipad - Catalog, Ipad
localhost:3000/catalog/watch - Catalog, Watch*/


/**/
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
{/*<RegisterForm/>*/}
/*
<Form/>*/
