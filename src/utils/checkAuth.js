import jwt_decode from "jwt-decode";
import store from "../store";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "../store/auth/actions";

const checkAuth = () => {

    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        setAuthToken(token);
        const decoded = jwt_decode(token);
        store.dispatch(setCurrentUser(decoded));
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          store.dispatch(logoutUser());
          window.location.href = "./login";
        }
      }
}

export default checkAuth

