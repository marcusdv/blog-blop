import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Contato from "../contato/Contato";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <Contato />

            <div id={styles.footerSocial}>
                <h4>SIGA-ME!</h4>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/marcus-bittencourt/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoLinkedin />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/marcusdv" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>

            <div id={styles.footerContent}>
                <p>© 2026 Marcus Costa. </p>
            </div>
        </footer>
    );
}
