import React from 'react';

const TagList = (props) => {
    return(
        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom w3-margin-right">{props.tag}</span>
    );
};

export default TagList;