import React from "react";
import TagList from "./TagList";
import tags from "./../constants/tags";

const Tags = () => {
    const elements = tags.map((item, index) => {
        return <TagList
            key={index}
            tag={item}
        />
    })

    return(
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>{elements}</p>
                </div>
            </div>
        </>
    )
}

export default Tags;