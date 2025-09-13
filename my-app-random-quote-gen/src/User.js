import React from "react";

const User = ({userName, tweet}) => {

    console.log(userName)

    return(
        <div>
            <h1>{userName}</h1>
            <p>{tweet}</p>
        </div>
    )
};

export default User;