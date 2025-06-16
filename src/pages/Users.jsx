import { useNavigate } from "react-router";

import useUsers from "../hooks/useUsers";
import UserCard from "../components/UserCard";
import withAuthorization from "../hoc/withAuthorization";

const Users = () => {
    const navigate = useNavigate();
    const { users, loading, error } = useUsers();

    console.log(users, loading, error);

    const handleViewUser = (userId) => {
        navigate(`/users/${userId}`);
    }

    return (
        <div className="">
            <div className="flex mb-20">
                <h1 className="">Users</h1>
            </div>
            <div className="grid gap-15 grid-cols-3 ">
                {
                    users.map((user) => (
                        <div key={user.id} onClick={() => handleViewUser(user.id)} className="cursor-pointer">
                            <UserCard user={user} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default withAuthorization( Users , ["ADMIN","SUPER_ADMIN"]);