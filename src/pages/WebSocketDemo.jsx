import React, { useState, useEffect } from "react";

const WebSocketDemo = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection to the echo server
    const ws = new WebSocket("wss://echo.websocket.org");

    // Set up event handlers for WebSocket
    ws.onopen = () => {
      console.log("Connected to WebSocket server.");
    };

    ws.onmessage = (event) => {
      // Add the received message to the chat window
      setMessages((prev) => [...prev, { message: event.data, from: "server" }]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(ws);

    // Clean up WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (socket && input) {
      // Send the message to the WebSocket server
      socket.send(input);

      // Add the message to the chat window
      setMessages((prev) => [...prev, { message: input, from: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">WebSocket Chat Simulation</h2>
      <p className="mb-4 text-gray-600">
        This is a simulation of a WebSocket-based chat. The messages you send
        will be echoed back by the WebSocket server to simulate real-time
        communication. Simply type a message in the input box below and click
        "Send" to see it appear both as your message and as the server's
        response.
      </p>
      <div className="bg-white p-4 rounded-lg shadow mb-4 h-64 overflow-y-scroll">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.from === "user"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-green-100 text-green-900"
              }`}
            >
              {msg.from === "user" ? "You" : "Server"}: {msg.message}
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border p-2 w-full mr-2"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocketDemo;
