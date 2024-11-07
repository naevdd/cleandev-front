// ReplyPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReplyPage = () => {
  const { threadId } = useParams();
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/threads/${threadId}/replies`);
        setReplies(response.data.replies);
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };
    fetchReplies();
  }, [threadId]);

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/api/threads/${threadId}/reply`, {
        reply: newReply,
        userId: localStorage.getItem("_id"),
      });
      setReplies(response.data.replies);
      setNewReply("");
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  return (
    <div className='replyPage'>
      <h1>Replies</h1>
      <ul>
        {replies.map((reply, index) => (
          <li key={index}>{reply.text}</li>
        ))}
      </ul>
      <form onSubmit={handleReplySubmit}>
        <input
          type='text'
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Add a reply..."
          required
        />
        <button type="submit">Post Reply</button>
      </form>
    </div>
  );
};

export default ReplyPage;
