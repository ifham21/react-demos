import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    const log = <p>Welcome User</p>;
    const admin = <p>Welcome Admin!</p>;

    return(
        <div>
            {(loggedIn && isAdmin) ? admin : (loggedIn && !isAdmin) ? log: "Please Log in"}
        </div>
    )
}

export default UserStatus;