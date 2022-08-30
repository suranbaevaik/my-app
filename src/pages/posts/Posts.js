import React from 'react';
import Post from "../../components/Post";
import posts from "../../constants/posts";

const Posts = () => {
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
        <div className="w3-col l12 s12">
            {elements}
        </div>
    )
};

export default Posts;