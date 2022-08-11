import React from "react";
import Post from "./Post";

const posts = [
    {
        img: 'https://www.w3schools.com/w3images/woods.jpg',
        title: 'TITLE HEADING',
        title_desc: 'Title description',
        created_date: 'April 7, 2014',
        desc: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        count_comments: 0

    },
    {
        img: 'https://www.w3schools.com/w3images/bridge.jpg',
        title: 'BLOG ENTRY',
        title_desc: 'Title description',
        created_date: 'April 2, 2014',
        desc: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        count_comments: 2
    }
]

const BlogEntries = () => {
    return(
        <div className="w3-col l8 s12">
            <Post
                img={posts[0].img}
                title={posts[0].title}
                title_desc={posts[0].title_desc}
                created_date={posts[0].created_date}
                desc={posts[0].desc}
                count_comments={posts[0].count_comments}
            />
            <Post
                img={posts[1].img}
                title={posts[1].title}
                title_desc={posts[1].title_desc}
                created_date={posts[1].created_date}
                desc={posts[1].desc}
                count_comments={posts[1].count_comments}
            />
        </div>
    )
}

export default BlogEntries;