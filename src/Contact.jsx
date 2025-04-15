import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <header className="bg-[url(/Portfolio/artsy-background.jpg)] bg-cover bg-center bg-no-repeat h-screen w-full relative flex flex-col items-center  text-white">
            <div className="bg-red-600 border-gray-800 border-2 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 flex flex-col items-center mt-20 mb-10">
                <h1 className="text-4xl font-bold mb-4">Contact?</h1>
                <p className="text-lg text-center max-w-xl mb-8 px-4">
                    Wil jij contact met mij opnemen of mijn bijdrages zien op GitHub en LinkedIn? Dat kan hier!
                </p>
            </div>
            <div className="flex space-x-6 text-[10rem]">
                <a
                    href="https://github.com/kasperdejong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/kasper-de-jong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:1078780@hr.nl"
                    className="hover:text-red-400 transition"
                >
                    <MdEmail />
                </a>
            </div>
        </header>
    );
}

export default Contact;
