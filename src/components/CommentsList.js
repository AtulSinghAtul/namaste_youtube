import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {/* don't use indexes as keys */}
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="border-l-4 border-lime-600 pl-5 ml-5">
            {/* *Recursing it comment's of replies */}
            <CommentsList comments={comment.replies} />
            {/* <Comment data={comment} />
            <Comment data={comment} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
