import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header id={styles.header}>
            {/* lado esquerdo */}
            <div id={styles.logo}>
                <a href="/">Marcus Costa</a>
            </div>

            {/* lado direito */}
            <nav id={styles.navegacao}>
                <ul>
                    <li className={"efeitoVarredura"}>
                        <a href="/sobre">Sobre</a>
                    </li>
                    <li className={"efeitoVarredura"}>
                        <a href="/artigos">Blog</a>
                    </li>
                    <li className={"efeitoVarredura"}>
                        <a href="/projetos">Meus Projetos</a>
                    </li>
                </ul>
            </nav>

            {/* icones */}
            <div>
                <ul id={styles.icones}>
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

                    <li>
                        <a
                            href="mailto:marcus.vinicius.bittencourt.c@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdEmail />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
