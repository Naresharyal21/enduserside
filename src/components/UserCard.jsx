const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address?.address}, {user.address?.city}, {user.address?.state}, {user.address?.postalCode}</p>
        </div>
    )
}

export default UserCard;