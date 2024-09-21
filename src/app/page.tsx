import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MailIcon from "@/components/shared/MailIcon";
import FileIcon from "@/components/shared/FileIcon";
import InfoIcon from "@/components/shared/InfoIcon";
import ArrowUpIcon from "@/components/shared/ArrowUpIcon";
import AISpinner from "@/components/ai/AISpinner";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <header className="fixed top-0 right-0 left-0 flex items-center justify-between h-16 px-6 bg-white text-gray-900">
        <p className="text-xl font-bold">
          Jake Yesk
        </p>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost">
            <MailIcon className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Button>
          <Button size="icon" variant="ghost">
            <FileIcon className="h-5 w-5" />
            <span className="sr-only">View File</span>
          </Button>
          <Button size="icon" variant="ghost">
            <InfoIcon className="h-5 w-5" />
            <span className="sr-only">More Info</span>
          </Button>
        </div>
      </header>
      <div className="flex-1 md:grid md:grid-cols-2 mt-16">
        <div className="bg-white flex items-center justify-center md:h xs:h-[30vh]">
          <AISpinner/>
        </div>
        <div className="bg-white p-6 flex flex-col md:h-[70vh] justify-center">
          <div className="flex-1 overflow-auto">
            <div className="flex items-start gap-4">
              <div className="grid gap-1">
                <div className="font-bold">You</div>
                <div className="prose prose-stone">
                  <p>Hello, I'm J Yesk. How can I assist you today?</p>
                </div>
              </div>
            </div>
            <div className="flex content-center gap-4">
              <div className="grid gap-1">
                <div className="font-bold">AI Assistant</div>
                <div className="prose prose-stone">
                  <p>
                    Hello J Yesk, I'm an AI assistant. I'm here to help you with
                    any questions or tasks you may have. How can I be of
                    assistance?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid gap-1">
                <div className="font-bold">You</div>
                <div className="prose prose-stone">
                  <p>
                    I'm looking to create a portfolio website to showcase my
                    work. Can you help me with that?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid gap-1">
                <div className="font-bold">AI Assistant</div>
                <div className="prose prose-stone">
                  <p>
                    Absolutely, I'd be happy to help you create a beautiful
                    portfolio website. What kind of content and features are you
                    looking to include?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 left-0 w-full p-4 max-w-xl justify-self-center">
            <div className="relative">
              <Textarea
                className="min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 shadow-sm pr-16"
                id="message"
                name="message"
                placeholder="Message the AI..."
                rows={1}
              />
              <Button
                className="absolute top-3 right-3 w-8 h-8"
                disabled
                size="icon"
                type="submit"
              >
                <ArrowUpIcon className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <p className="text-xs text-center text-neutral-700 font-medium mt-2">
              The AI's responses may contain inaccuracies. Please verify
              important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
