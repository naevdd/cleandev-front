import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../css files/comments.css";

const Comment = ({ comment, threadId }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyText, setReplyText] = useState("");
    const navigate = useNavigate();
  
    const handleReplySubmit = () => {
      // Assuming you have a backend function to post the reply
      // You would call that API here
      console.log("Replying to comment:", comment.id, "with text:", replyText);
      setShowReplyForm(false);
      setReplyText("");
    };
  
    return (
      <div className="comment__container" key={comment.id}>
        <div className="comment__header">
          <img src={comment.avatar || "/default-avatar.png"} alt="user avatar" className="comment__avatar" />
          <div className="comment__info">
            <span className="comment__username">{comment.username}</span>
            <span className="comment__timestamp">{comment.timestamp}</span>
          </div>
        </div>
        <p className="comment__text">{comment.text}</p>
        <div className="comment__actions">
          <button className="comment__reply" onClick={() => setShowReplyForm(!showReplyForm)}>
            Reply
          </button>
        </div>
        {showReplyForm && (
          <div className="reply__form">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              className="reply__input"
            />
            <button onClick={handleReplySubmit} className="reply__button">
              Submit
            </button>
          </div>
        )}
        <div className="comment__replies">
          {comment.replies && comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} threadId={threadId} />
          ))}
        </div>
      </div>
    );
  };
  
  const Comments = ({ comments=[], threadId }) => {
    return (
      <div className="comments__container">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} threadId={threadId} />
        ))}
      </div>
    );
  };
  
  export default Comments;