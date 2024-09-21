import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Jake Yesk</h1>
        <div className="space-x-4">
          <Link
            href="https://github.com/jakeyesk"
            className="hover:text-gray-300"
          >
            <Github className="inline-block" />
          </Link>
          <Link
            href="https://linkedin.com/in/jakeyesk"
            className="hover:text-gray-300"
          >
            <Linkedin className="inline-block" />
          </Link>
          <button className="rounded bg-blue-500 px-4 py-2 hover:bg-blue-600">
            <Mail className="mr-2 inline-block" />
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
