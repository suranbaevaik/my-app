import React from 'react';
import tags from "../../constants/tags";

const Tags = () => {
    return(
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {
                            tags.length > 0 ? tags.map((item, index) => {
                                return <span
                                    key={index}
                                    className="w3-tag w3-light-grey w3-small w3-margin-bottom w3-margin-right">
                                        {item}
                                    </span>
                            }) : "no tags"
                        }
                    </p>
                </div>
            </div>
        </>
    )
};

export default Tags;