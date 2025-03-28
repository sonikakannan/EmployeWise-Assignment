import React, { useState } from "react";
import { Modal, TextField, Button, Box } from "@mui/material";

const EditUserModal = ({ user, onClose, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(updatedUser);
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-800">Edit User</h2>
        <TextField
          fullWidth
          label="First Name"
          name="first_name"
          value={updatedUser.first_name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last Name"
          name="last_name"
          value={updatedUser.last_name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
          margin="normal"
        />
        <div className="flex justify-end mt-4 gap-3">
          <Button variant="outlined" color="success" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
