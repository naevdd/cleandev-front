import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../api-mock.json';
import '../css files/discuss.css';

const DiscussPage = () => {
  const [thread, setThread] = useState("");
  const [imageList, setImageList] = useState(images.resources);
  const [threadList, setThreadList] = useState([]);
  const [showReplyBox, setShowReplyBox] = useState(null); // Track which thread has the reply box open
  const [newReply, setNewReply] = useState(""); // Track the new reply input

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/all/threads");
        setThreadList(response.data.threads);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };
    fetchThreads();
  }, []);

  const createThread = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/create/thread", {
        thread,
        userId: localStorage.getItem("_id"),
      });
      alert(response.data.message);
      setThreadList(response.data.threads);
      setThread(""); // Clear input field after submission
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const handleLike = async (threadId) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/like/thread/${threadId}`, {
        userId: localStorage.getItem("_id"),
      });
      setThreadList((prevThreadList) =>
        prevThreadList.map((t) =>
          t.id === threadId ? { ...t, likes: response.data.updatedLikes } : t
        )
      );
    } catch (error) {
      console.error("Error liking thread:", error);
    }
  };

  const handleReplyToggle = (threadId) => {
    setShowReplyBox((prev) => (prev === threadId ? null : threadId)); // Toggle reply box visibility
    setNewReply(""); // Clear any previous reply text
  };

  const handleReplySubmit = async (threadId) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/threads/${threadId}/reply`, {
        reply: newReply,
        userId: localStorage.getItem("_id"),
      });
      setThreadList((prevThreadList) =>
        prevThreadList.map((t) =>
          t.id === threadId ? { ...t, replies: response.data.updatedReplies } : t
        )
      );
      setNewReply(""); // Clear reply input after submission
      setShowReplyBox(null); // Close the reply box
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createThread();
  };

  return (
    <div className='discusspage'>
      <div className='alertdiv'>
        <h1>ALERTS</h1>
        <div className='image-grid'>
          {imageList.map((image) => (
            <div className='image' key={image.public_id}>
              <img src={image.url} alt={image.public_id} />
            </div>
          ))}
        </div>
      </div>

      <div className='discussdiv'>
        <h1>DISCUSS</h1>
        <form className='form' onSubmit={handleSubmit}>
          <fieldset className='form-field'>
            <legend>Title / Description</legend>
            <input
              type='text'
              name='thread'
              required
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </fieldset>
          <button className='homeBtn'>Comment</button>
        </form>

        <div className='thread__container'>
          {threadList.map((thread) => (
            <div className='thread__item' key={thread.id}>
              <p className='thread__title'>{thread.title}</p>
              <div className='react__container'>
                <button className="likesBtn" onClick={() => handleLike(thread.id)}>
                  👍 {thread.likes.length} {/* Display like count */}
                </button>
                <button className="replyBtn" onClick={() => handleReplyToggle(thread.id)}>
                  Reply ({thread.replies.length}) {/* Display reply count */}
                </button>
              </div>

              {/* Display Replies */}
              {thread.replies && thread.replies.length > 0 && (
                <ul className="reply__list">
                  {thread.replies.map((reply, index) => (
                    <li key={index} className="reply__item">
                      {reply.text}
                    </li>
                  ))}
                </ul>
              )}

              {/* Reply Input Box */}
              {showReplyBox === thread.id && (
                <div className="reply__box">
                  <input
                    type="text"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Add a reply..."
                    required
                  />
                  <button onClick={() => handleReplySubmit(thread.id)}>Submit</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussPage;
