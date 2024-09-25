import React, { useState } from "react";
import { FiImage, FiPaperclip, FiSmile } from "react-icons/fi"; // Icons

const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="border-t border-gray-300 p-4">
      <div className="flex items-center space-x-4">
        <FiImage className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <FiPaperclip className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <FiSmile className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <div className="flex-grow">
          {/* <input
            // type="text"
            type=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            style={{ height: 200,  }}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
          /> */}
          <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"  onChange={(e) => setMessage(e.target.value)} id="html-link" placeholder="Write a message..."> </textarea>
        </div>
        <button
          disabled={!message.trim()}
          className={`px-4 py-2 rounded-lg ${
            message.trim()
              ? "bg-green-600 text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => {
            // Handle send message
            console.log("Message sent: ", message);
            setMessage(""); // Clear the message after sending
          }}
        >
         <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Send</button> 
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
