import styles from "./Header.module.css";

export default function Header() {
    return (
        <header id={styles.header}>
            {/* lado esquerdo */}
            <div id={styles.logo}>
                <a>Marcus Oliveira</a>
            </div>

            {/* lado direito */}
            <nav>
                <ul>
                    <li>
                        <a>Sobre</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Resumo Semanal</a>
                    </li>
                </ul>
            </nav>
            <div>Aqui será algo furutamente</div>
        </header>
    );
}
