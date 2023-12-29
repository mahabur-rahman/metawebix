import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User profile : {user.name} </h1>
    </div>
  );
};

export default UserProfile;
