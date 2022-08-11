import React from "react";
import PopularPostsElement from "./PopularPostsElement";

const popular_posts = [
    {
        img: 'https://www.w3schools.com/w3images/workshop.jpg',
        title: 'Lorem',
        desc: 'Sed mattis nunc'
    },
    {
        img: 'https://www.w3schools.com/w3images/gondol.jpg',
        title: 'Ipsum',
        desc: 'Praes tinci sed'
    },
    {
        img: 'https://www.w3schools.com/w3images/skies.jpg',
        title: 'Dorum',
        desc: 'Ultricies congue'
    },
    {
        img: 'https://www.w3schools.com/w3images/rock.jpg',
        title: 'Mingsum',
        desc: 'Lorem ipsum dipsum'
    }
]

const PopularPosts = () => {
    return(
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <PopularPostsElement
                        img={popular_posts[0].img}
                        title={popular_posts[0].title}
                        desc={popular_posts[0].desc}
                    />
                    <PopularPostsElement
                        img={popular_posts[1].img}
                        title={popular_posts[1].title}
                        desc={popular_posts[1].desc}
                    />
                    <PopularPostsElement
                        img={popular_posts[2].img}
                        title={popular_posts[2].title}
                        desc={popular_posts[2].desc}
                    />
                    <PopularPostsElement
                        img={popular_posts[3].img}
                        title={popular_posts[3].title}
                        desc={popular_posts[3].desc}
                    />
                </ul>
            </div>
            <hr />
        </>
    )
}

export default PopularPosts;