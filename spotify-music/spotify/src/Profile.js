import React from "react";
import "./Profile.css";

function Profile({ profile }) {
    return (
        <div className="profile">
            <div>My profile</div>
            <div>{profile.display_name}</div>
            <img src={profile.images[0].url} />
        </div>
    );
}

export default Profile;