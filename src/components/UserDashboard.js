import React, { useState, useEffect } from "react";
import UserNav from "./UserNav";
import { jwtDecode } from "jwt-decode";
export default function UserDashboard() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:7000/api/userData", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
      });
      response = await response.json();
      setLeaveRequests(response); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLeaveRequests([]); 
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid details");
        return;
      }
      setLeaveRequests([...leaveRequests, { ...formData, status: "Pending" }]);
      setFormData({ name: "", startDate: "", endDate: "", reason: "" });
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <>
      <UserNav />
      <div className="container mt-4 bg-black">
        <h2>User Dashboard</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Apply for Leave
          </button>
        </form>
        <h3>Leave Requests</h3>
        {leaveRequests && leaveRequests.length > 0 ? (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Reason</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {leaveRequests.map((leave, index) => (
        <tr key={index}>
          <td>{leave.name}</td>
          <td>{leave.startDate}</td>
          <td>{leave.endDate}</td>
          <td>{leave.reason}</td>
          <td>{leave.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No leave requests available.</p> 
)}

      </div>
    </>
  );
}
