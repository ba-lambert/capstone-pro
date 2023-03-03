
const googleLink = (req, res) => {
  res.send('<a href="/auth/google/">Sinup with google</a>');
  console.log('hello world')
};

function protectedApi(req, res){
  res.status(200).json(`hello ${req.user.displayName}`);
};

function failurerApi  (req, res) {
  res.status(500).json({ message: "someThing went wrong" });
};
function logout(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy(function(err) {
      if (err) { return next(err); }
      res.send("see you");
    });
  });
};




exports.googleLink = googleLink;
exports.protectedApi = protectedApi;
exports.failurerApi = failurerApi;
exports.logout = logout;
