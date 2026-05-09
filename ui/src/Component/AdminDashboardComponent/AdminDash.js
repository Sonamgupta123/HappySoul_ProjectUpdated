<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./AdminDash.css";

function AdminDash() {
  const name = localStorage.getItem("name") || "Admin";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/fetch")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="admin-dashboard-container">
      <motion.div 
        className="admin-dashboard container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="welcome-card glass-panel shadow-sm" variants={itemVariants}>
          <h2>Welcome, {name}! 👋</h2>
          <p>You are managing the HappySoul user system.</p>
        </motion.div>

        <motion.div className="stats-card glass-panel shadow-sm" variants={itemVariants}>
          <h4>Total Registered Users</h4>
          <p className="count">{users.length}</p>
        </motion.div>

        <motion.h3 className="mt-4 mb-3 table-title" variants={itemVariants}>User Details</motion.h3>

        <motion.div className="table-responsive glass-panel shadow-sm" variants={itemVariants}>
          <table className="table table-hover admin-table mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u, index) => (
                  <tr key={index}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.mobile}</td>
                    <td>{u.city}</td>
                    <td>{u.age}</td>
                    <td>{u.gender}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-4">
                    No users found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AdminDash;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./AdminDash.css";

function AdminDash() {
  const name = localStorage.getItem("name") || "Admin";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/fetch")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="admin-dashboard-container">
      <motion.div 
        className="admin-dashboard container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="welcome-card glass-panel shadow-sm" variants={itemVariants}>
          <h2>Welcome, {name}! 👋</h2>
          <p>You are managing the HappySoul user system.</p>
        </motion.div>

        <motion.div className="stats-card glass-panel shadow-sm" variants={itemVariants}>
          <h4>Total Registered Users</h4>
          <p className="count">{users.length}</p>
        </motion.div>

        <motion.h3 className="mt-4 mb-3 table-title" variants={itemVariants}>User Details</motion.h3>

        <motion.div className="table-responsive glass-panel shadow-sm" variants={itemVariants}>
          <table className="table table-hover admin-table mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u, index) => (
                  <tr key={index}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.mobile}</td>
                    <td>{u.city}</td>
                    <td>{u.age}</td>
                    <td>{u.gender}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-4">
                    No users found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AdminDash;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
