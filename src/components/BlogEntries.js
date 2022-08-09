import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";

const BlogEntries = () => {
    return(
        <div className="w3-col l8 s12">
            <Post1/>
            <Post2/>
        </div>
    )
}

export default BlogEntries;