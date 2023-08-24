import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  id: number;
  username: string;
  email: string;
  password: string;
}

const UserManagement: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (selectedUser) {
      setSelectedUser((prevUser: any) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleEditUser = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      try {
        await axios.put(`http://localhost:5000/users/${selectedUser.id}`, selectedUser);
        setMessage("User updated successfully!");
        fetchUserData();
      } catch (error) {
        setMessage("An error occurred while updating the user.");
        console.error(error);
      }
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      setMessage("User deleted successfully!");
      fetchUserData();
    } catch (error) {
      setMessage("An error occurred while deleting the user.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
          {selectedUser?.id === user.id ? (
            <>
              <input
                type="text"
                name="username"
                value={selectedUser.username}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={selectedUser.email}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>Save</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
      <div>{message}</div>
    </div>
  );
};

export default UserManagement;
