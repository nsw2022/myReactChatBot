import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";

const ChatRoom = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();

      setUserInput(userInput + "\n");
      /*
      userInput.style.height = 100 + "px";
      userInput.style.borderRadius = 8 + "px";
      */
    }
  };

  useEffect(() => {
    setUserInput("");
  }, []);

  const sendMessage = async () => {
    let userMessage = userInput.trim();
    console.log(userMessage);

    if (!userMessage) return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: "User", message: userMessage }]);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_input: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "도봉이", message: responseData.도봉이 },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    console.log(chatHistory);

    // Clear input field
    setUserInput("");
  };

  return (
    <section className=" " style={{ margin: "0 auto", width: "1200px" }}>
      <h1 className="">도봉이와의 대화방</h1>
      <div className="">
        <div style={{ display: "flex", flex: "3" }}>
          <NavBar />
          <div
            style={{
              flex: "7",
              background: "#eee",
              overflowY: "scroll",
              height: "800px",
            }}
          >
            <div style={{ padding: "16px" }}>
              {/* Display chat history */}
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`message ${
                    chat.sender === "User" ? "user" : "도봉이"
                  }`}
                >
                  <p>
                    <strong>{chat.sender}:</strong> {chat.message}
                  </p>
                  <hr />
                </div>
              ))}

              <div style={{ flex: "7" }}>
                <textarea
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="메세지를 입력하세요."
                  rows={"30"}
                  cols={"10"}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  onKeyDown={handleKeyDown}
                  style={{
                    backgroundColor: "rgba(217,217,227,0.8)",
                    borderColor:
                      " rgba(255, 255, 255, var(--tw-border-opacity))",
                    borderRadius: "999px",
                    borderWidth: "1px",
                    width: "98%",
                    height: "40px",
                    resize: "none",
                    lineHeight: "39px",
                    fontSize: "24px",
                    paddingLeft: "10px",
                  }}
                />
                <button onClick={sendMessage} style={{ visibility: "hidden" }}>
                  보내기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatRoom;
