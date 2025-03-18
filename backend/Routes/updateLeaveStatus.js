const express = require("express");
const router = express.Router();
const Leave = require("../models/LeaveRequest"); 

router.put("/updateLeaveStatus", async (req, res) => {
  try {
    console.log("Received Request:", req.body);
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ success: false, message: "Invalid request. ID and Status are required." });
    }

    const updatedLeave = await Leave.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedLeave) {
      return res.status(404).json({ success: false, message: "Leave request not found" });
    }

    res.json({ success: true, message: "Leave status updated", updatedLeave });
  } catch (error) {
    console.error("Error updating leave status:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router; 
