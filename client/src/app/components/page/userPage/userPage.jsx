import React from "react";
import PropTypes from "prop-types";
import Loader from "../../common/loader";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import CommentsCard from "../../ui/commentsCard";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";

function UserPage({ userId }) {
  const user = useSelector(getUserById(userId));

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard data={user.qualities}/>
            <MeetingsCard value={user.completedMeetings}/>
          </div>
          <div className="col-md-8">
            <CommentsCard />
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
}
UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
