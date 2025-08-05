import { useState } from "react";
import { boldPattern } from "../../util/regex";
import axios from "axios";
import Image from "next/image";
import { GtmEventNames, trackGtmEvent } from '../../util/analytics-helper';
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
      const { data } = await axios.post(`${BACKEND_URL}/chat`, { message });
      setResponses((prev) => [...prev, { user: "ai", message: data.text }]);
      trackGtmEvent(GtmEventNames.FORM_SUBMIT, { 'sent_message': message });
      trackGtmEvent(GtmEventNames.FORM_SUBMIT, { 'receive_message': data.text });
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
      <div className="chat--figure">
        <div className="rounded">
          <Image
            className={loading ? "" : "active"}
            src="/images/avatars/lego-figure.png"
            alt="anna avatar"
            sizes='(max-width: 768px) 70px, 120px'
            fill
          />
          <video
            className={loading ? "active" : ""}
            width="120" height="145" preload="auto" playsInline autoPlay muted loop>
            <source src="/images/avatars/lego-figure.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <small>I am powered by a free model, drop me an email if you would like to talk further!</small>

      </div>
      <div className="chat--bottom">
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
