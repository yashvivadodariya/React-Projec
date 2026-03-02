import './UserProfileCard.css';

function UserProfileCard({
    profilePic,
    name,
    address,
    moblieNo,
    email,
    jobRole
}) {
    return (
        <div className="user-card">
            <img src={profilePic} alt="Profile" />
            <h2>{name}</h2>
            <p>{email}</p>

            <div className="user-info">
                <p><strong>Mobile No:</strong> {moblieNo}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Job Role:</strong> {jobRole}</p>
            </div>
        </div>
    );
}

export default UserProfileCard;
