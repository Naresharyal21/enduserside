import { useEffect, useState } from "react";
import { fetchUserById, fetchUsers } from "../myapi/productApi";


const useUsers = (id) => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);

    if (id) {
      const { data, error } = await fetchUserById(id);

      setLoading(false);

      if (error) {
        setError(error);
        return;
      }

      setUsers([data]);

      return;
    }

    const { data, error } = await fetchUsers();

    setLoading(false);

    if (error) {
      setError(error);

      return;
    }

    setUsers(data?.users || []);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    error,
    loading,
    users,
  };
};

export default useUsers;