import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-20 h-20 rounded-full border-2 border-green-500"
      />
      <div className="flex-1 text-left ml-4">
        <p className="text-lg font-semibold text-gray-800">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>
      <div className="flex items-center gap-5">
        <button
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={() => onEdit(user)}
        >
          <MdModeEdit className="text-2xl md:text-3xl" />
        </button>
        <button
          className="text-red-500 cursor-pointer hover:text-red-600"
          onClick={() => onDelete(user.id)} // Call delete function
        >
          <MdDelete className="text-2xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
