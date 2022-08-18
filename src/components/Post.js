import React from "react";

const Post = (props) => {
    return(
        <>
            <div className="w3-card-4 w3-margin w3-white">
                <img src={props.img} alt="Nature" style={{ width: "100%" }} />
                <div className="w3-container">
                <h3>
                    <b>{props.title}</b>
                </h3>
                <h5>
                    {props.title_desc}, <span className="w3-opacity">{props.created_date}</span>
                </h5>
        </div>
        <div className="w3-container">
            <p>{props.desc}</p>
            <div className="w3-row">
                <div className="w3-col m8 s12">
                    <p>
                        <button className="w3-button w3-padding-large w3-white w3-border">
                            <b>READ MORE »</b>
                        </button>
                    </p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                    <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">{props.count_comments}</span>
              </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
            <hr />
        </>
    )
}

Post.defaultProps = {
    img:'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title:'deafult title',
    title_desc:'default title desc',
    created_date:'default created date',
    desc:'default desc',
    count_comments:'default count comments'
}

export default Post;