import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import EditUserModal from "../components/EditUserModal";
import { toast } from "react-toastify";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current page from the URL (default to 1)
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=3`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [page]);

  // Update the URL when changing pages
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setIsModalOpen(false);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      toast.success("Deleted Successfully!")
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100 p-6">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Users List</h2>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid gap-6 w-full max-w-4xl">
      {users.map((user) => (
  <UserCard key={user.id} user={user} onEdit={handleEditClick} onDelete={handleDelete} />
))}

      </div>

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} setPage={handlePageChange} />

      {/* Edit Modal */}
      {isModalOpen && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UsersPage;
