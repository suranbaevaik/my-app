import React from "react";

const tags = ['Travel', 'New York', 'London', 'IKEA', 'NORWAY', 'DIY', 'Ideas', 'Baby', 'Family', 'News', 'Clothing', 'Shopping', 'Sports', 'Games'];

const Tags = () => {
    const TagsList = (props) => {
        return(
            <>
                <span className="w3-tag w3-black w3-margin-bottom">{props.tag1}</span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">{props.tag2}</span>
            </>
        )
    }

    return(
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        <TagsList tag1={tags[0]}/>
                        <TagsList tag2={tags[1]}/>
                        <TagsList tag2={tags[2]}/>
                        <TagsList tag2={tags[3]}/>
                        <TagsList tag2={tags[4]}/>
                        <TagsList tag2={tags[5]}/>
                        <TagsList tag2={tags[6]}/>
                        <TagsList tag2={tags[7]}/>
                        <TagsList tag2={tags[8]}/>
                        <TagsList tag2={tags[9]}/>
                        <TagsList tag2={tags[10]}/>
                        <TagsList tag2={tags[11]}/>
                        <TagsList tag2={tags[12]}/>
                        <TagsList tag2={tags[13]}/>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tags;