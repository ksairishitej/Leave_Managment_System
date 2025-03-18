const express = require('express');
const router = express.Router();

router.post("/userData", async (req, res) => {
    try {
        res.send(global.leaverequests)
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json([]); 
    }
  });
  
module.exports = router;
