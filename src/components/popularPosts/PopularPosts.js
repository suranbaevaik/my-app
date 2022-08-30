import React from "react";
import PopularPostsElement from "../PopularPostsElement";
import popular_posts from "../../constants/popularposts";
import style from "./PopularPosts.module.css";

const PopularPosts = () => {

    let popularPosts = popular_posts;
    let btnMore = null;
    if (popular_posts.length > 10) {
        popularPosts = popular_posts.slice(0, 10);
        btnMore = <button className="btn-more">Еще</button>;
    }

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className={style.title}>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularPosts.map((item, index) => {
                            return <PopularPostsElement
                                key={index}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />
                        })
                    }
                    {btnMore}
                </ul>
            </div>
            <hr />
        </>
    )
}

export default PopularPosts;