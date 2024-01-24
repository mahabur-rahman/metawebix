import ChatHeader from "../components/ChatHeader";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  return (
    <>
      <ChatHeader />
      <div className="mt-16">
        <Sidebar />
      </div>
    </>
  );
};

export default Chat;
