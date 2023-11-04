export async function isLoggedIn(req, res, next) {
  if (req.user) {
    // const isAdmin = await isUserAdmin(req.user.email);
    // req.isAdmin = isAdmin;
    next();
  } else {
    return res.sendStatus(401);
  }
}
