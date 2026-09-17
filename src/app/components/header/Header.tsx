import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header id={styles.header}>
            {/* lado esquerdo */}
            <div id={styles.logo}>
                <Link href="/">Marcus Costa</Link>
            </div>

            {/* lado direito */}
            <nav id={styles.navegacao}>
                <ul>
                    <li className={"efeitoVarredura"}>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li className={"efeitoVarredura"}>
                        <Link href="/artigos">Blog</Link>
                    </li>
                    <li className={"efeitoVarredura"}>
                        <Link href="/projetos">Meus Projetos</Link>
                    </li>
                </ul>
            </nav>

            {/* icones */}
            <ul id={styles.icones}>
                <li>
                    <a href="https://www.linkedin.com/in/marcus-bittencourt/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/marcusdv" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>

                <li>
                    <a href="mailto:marcus.vinicius.bittencourt.c@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                    </a>
                </li>
            </ul>
        </header>
    );
}
