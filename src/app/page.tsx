import Navbar from "./components/Navbar";
import AnimatedAIIcon from "./components/AnimatedAIIcon";
import ChatWindow from "./components/ChatWindow";
import MovingBackground from "./components/MovingBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="w-1/3">
          <AnimatedAIIcon />
        </div>
        <div className="w-2/3">
          <ChatWindow />
        </div>
      </div>
      <MovingBackground />
    </main>
  );
}
