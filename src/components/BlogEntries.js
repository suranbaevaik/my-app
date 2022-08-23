import React from "react";
import Post from "./Post";
import posts from "./../constants/posts";



const BlogEntries = () => {
    const elements = posts.map((item, index) => {
        return <Post
            key={index}
            img={item.img}
            title={item.title}
            title_desc={item.title_desc}
            created_date={item.created_date}
            desc={item.desc}
            count_comments={item.count_comments}
        />
    })


    return(
        <div className="w3-col l8 s12">
            {elements}
            {/*<Post/>*/}
            {/*<Post title="Этот тайтл передается из родителя"/>*/}
        </div>
    )
}

export default BlogEntries;


/*пропсы нельзя менять (приравнивать к новому значению)*/