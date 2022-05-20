//Help messages
function Error(req, res, err) {
    console.error("Internal error: " + err.message);
    res.status(500).send({ status: "Internal error." });
  }
  
function Denied(req, res, err) {
    console.error(err);
    res.status(403).send({ status: "Access denied." });
  }
  
  module.exports = {Error, Denied};