import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <div id={styles.sobre}>
            <h1>SOBRE MIM!</h1>

            <h2>ÚLTIMA ATUALIZAÇÃO</h2>

            {/* último update */}
            <div id={styles.ultimoUpdate}>
                <h3>AGOSTO 22, 2026</h3>
                <br />
                <p>Olá! Feliz em te ver por aqui!</p>
                <br />
                <p>
                    Estive trabalhando para o <a href="https://institutotf.ong.br/">Instituto Themis Furigo</a>! É uma
                    ONG premiada e reconhecida que causa impacto social em todo o Brasil. Principalmente nas áreas de
                    tecnologia, agricultura, saúde e capacitação profissional.
                </p>
                <br />
                <p>
                    Atualmente estou desenvolvendo o novo site, mais moderno e de acordo com tudo o que o instituto faz
                    hoje em dia. Será lançado em breve!
                </p>
                <br />

                <p>Obrigado pelo seu tempo!</p>
                <br />
                <p>-Marcus</p>
            </div>
            <h2>NA ESTANTE</h2>
            <div></div>
        </div>
    );
}
