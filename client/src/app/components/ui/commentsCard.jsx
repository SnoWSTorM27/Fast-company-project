import React, { useEffect } from "react";
import CommentsList, { AddCommentsForm } from "../common/comments";
import { orderBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComments, getCommentsLoadingStatus, loadCommentsList, removeComment } from "../../store/comments";
import Loader from "../common/loader";
import { useParams } from "react-router-dom";
import { getCurrentUserId } from "../../store/users";

function commentsCard() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getCommentsLoadingStatus());
  const comments = useSelector(getComments());
  const currentUserId = useSelector(getCurrentUserId());
  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

  useEffect(() => {
    dispatch(loadCommentsList(userId));
  }, [userId]);

  const handleRemoveComment = (id) => {
    dispatch(removeComment(id));
  };

  const handleAddComment = (data) => {
    const payload = {
      ...data,
      pageId: userId,
      userId: currentUserId
    };
    dispatch(createComment(payload));
  };

  return (
    <>
      <div className="card mb-2">
        {" "}
        <div className="card-body ">
          <AddCommentsForm onSubmit={handleAddComment} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Комментарии</h2>
            <hr />
            {!isLoading ? (
              <CommentsList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />) : <Loader />
            }
          </div>
        </div>
      )}
    </>
  );
}

export default commentsCard;
