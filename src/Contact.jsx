import "./Contact.css"; // Imported the custom stylesheet
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <header className="contact-header-container">
            {/* Centered red info card */}
            <div className="contact-info-card">
                <h1 className="contact-title">Contact?</h1>
                <p className="contact-description">
                    Wil jij contact met mij opnemen of mijn bijdrages zien op GitHub en LinkedIn? Dat kan hier!
                </p>
            </div>
            
            {/* Reverted to original flat row container */}
            <div className="contact-links-container">
                <a
                    href="https://github.com/kasperdejong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link github"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/kasper-de-jong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link linkedin"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:1078780@hr.nl"
                    className="contact-link email"
                >
                    <MdEmail />
                </a>
            </div>
        </header>
    );
}

export default Contact;