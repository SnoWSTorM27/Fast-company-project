import React from "react";
import { useParams, Redirect } from "react-router-dom";
import UserPage from "../page/userPage";
import UsersListPage from "../page/usersListPage";
import EditUserPage from "../page/editUserPage";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../store/users";
import UsersLoader from "../ui/hoc/usersLoader";

function Users() {
  const params = useParams();
  const { userId, edit } = params;
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <>
      <UsersLoader>
        {userId ? (
          edit ? (userId === currentUserId ? (
            <EditUserPage />) : (<Redirect to={`/users/${currentUserId}/edit`}/>)
          ) : (
            <UserPage userId={userId} />
          )
        ) : (
          <UsersListPage />
        )}
      </UsersLoader>
    </>
  );
}

export default Users;
