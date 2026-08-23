import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <div id={styles.footerSocial}>
                <h4>SIGA-ME!</h4>
                <ul>
                    <li>
                        <a href="https://vercel.com/marcusdvs-projects" target="_blank" rel="noopener noreferrer">
                            <IoLogoVercel />
                        </a>
                    </li>
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
                <p>© 2026 Marcus Costa. Todos os direitos reservados.</p>
                <p>
                    Desenvolvido com Next.js e React. |{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
}
