exports.allAccess = (req, res) => {
  res.status(200).send("Public access.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Registered user access.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Only Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
