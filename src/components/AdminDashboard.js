import React, { useState, useEffect } from "react";
export default function AdminDashboard() {
  const [leaveRequests, setLeaveRequests] = useState([]);
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
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    };
    fetchData();
  }, []);
  const updateStatus = async (id, newStatus) => {
    try {
        const response = await fetch("http://localhost:7000/api/updateLeaveStatus", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status: newStatus })
        });
  
        const data = await response.json();
        if (response.ok && data.success) {
            setLeaveRequests((prevRequests) =>
                prevRequests.map((req) =>
                    req._id === id ? { ...req, status: newStatus } : req
                )
            );
        } else {
            alert("Failed to update leave status: " + data.message);
        }
    } catch (error) {
        console.error("Error updating leave status:", error);
        alert("Error updating leave status. Check console for details.");
    }
  };
  
  return (
    <div className="container mt-4 bg-black">
      <h2>Admin Dashboard</h2>
      <h3>Leave Requests</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.length === 0 ? (
            <tr><td colSpan="6">No leave requests available.</td></tr>
          ) : (
            
            leaveRequests.map((leave) => (
              <tr key={leave._id}>
                <td>{leave.name}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
                <td>
                  {leave.status === "Pending" ? (
                    <>
                      <button className="btn btn-success me-2" onClick={() => updateStatus(leave._id, "Approved")}>Approve</button>
                      <button className="btn btn-danger" onClick={() => updateStatus(leave._id, "Rejected")}>Reject</button>
                    </>
                  ) : (
                    <span className={leave.status === "Approved" ? "text-success" : "text-danger"}>
                      {leave.status}
                    </span>
                  )}
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
