import ChatComponent from '../ui/ChatComponent';

function ChatSlide() {

  return (
    <>

      <div className="chat--container slide">
        <h2 className="chat--content__title content__title">Chat with Me</h2>
        <ChatComponent />
      </div>
    </>
  );
}

export default ChatSlide;