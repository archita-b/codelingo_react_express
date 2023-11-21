// export async function isLoggedIn(req, res, next) {
//   if (req.user) {
//     // const isAdmin = await isUserAdmin(req.user.email);
//     // req.isAdmin = isAdmin;
//     next();
//   } else {
//     return res.sendStatus(401);
//   }
// }

import { getUserSessionDB } from "../model/session.js";

export async function isLoggedIn(req, res, next) {
  try {
    if (req.cookies === undefined || req.cookies.sessionId === undefined) {
      return res.sendStatus(401);
    }
    const sessionId = req.cookies.sessionId;
    const session = await getUserSessionDB(sessionId);

    const dbSessionId = session[0].session_id;

    if (dbSessionId !== sessionId) return res.sendStatus(401);

    req.userId = session[0].user_id;
    req.sessionId = sessionId;

    next();
  } catch (error) {
    if (error.message === "Session does not exist") {
      return res.sendStatus(401);
    }
    return res.sendStatus(500);
  }
}
