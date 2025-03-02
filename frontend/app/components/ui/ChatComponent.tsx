import { useState } from "react";
import { boldPattern } from "../../util/regex";
import axios from "axios";
import Image from "next/image";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const ChatComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [responses, setResponses] = useState<{ user: string; message: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setResponses((prev) => [...prev, { user: "user", message }]);
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/ai/chat`, { message });
      const aiResponse = response.data?.message?.text || "No response";

      setResponses((prev) => [...prev, { user: "ai", message: aiResponse }]);
      setMessage("");
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setLoading(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <>
      <div className="chat--messages">
        <ul>
          {responses.map((entry, index) => (
            <li
              key={index}
              className={`chat--message ${entry.user === "user" ? "user" : "ai"}`}
            >
              <div className="message--bubble">{boldPattern(entry.message)}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat--bottom">
        <div className="chat--figure">
          <div className="rounded">
            <Image
              className={loading ? "" : "active"}
              src="/images/avatars/chat-figure.png"
              alt="anna avatar"
              width={120}
              height={150}
            />
            <video
              className={loading ? "active" : ""}
              width="120" height="145" preload="auto" playsInline autoPlay muted loop>
              <source src="/images/avatars/chat-figure.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <small>I am powered by a free model, drop me an email if you would like to talk further!</small>

        </div>
        <div className="chat--input">
          <input
            type="text"
            className=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button
            className={`chat--send ${loading ? 'loading' : ''}`}
            onClick={sendMessage}
            disabled={loading}
          >
            <span>Send</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
