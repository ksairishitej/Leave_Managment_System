const express = require("express");
const router = express.Router();
const LeaveRequest = require("../models/LeaveRequest");
router.post("/apply", async (req, res) => {
   try {
          await LeaveRequest.create({
              name: req.body.name,  
              startDate:req.body.startDate,
              endDate: req.body.endDate,
              reason: req.body.reason,
              status:req.body.status
          });
          res.json({ success: true }); 
      } catch (error) {
          console.error(error);
          res.json({ success: false });
      }
  });

module.exports = router;
