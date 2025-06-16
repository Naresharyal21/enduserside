const withUserAdditionalInfo = (Component, user) => () => {

    return (
        <div className="myDetails flex wrapper ">
            <div className=" flex ">
            <div className="image flex ">
            <img src={user.image} alt="profile photo" />
            
            </div>
            <div className="otherDetails ">
            <Component user={user}  />
            <div className="additional"> 
                <p>Blood Group: {user.bloodGroup}</p>
                <p>Blood Group: {user.bloodGroup}</p>
                <p>Blood Group: {user.bloodGroup}</p>
                <p>Blood Group: {user.bloodGroup}</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withUserAdditionalInfo;