"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contato.module.css";
import { useBotaoPressionado } from "@/app/hooks/useBotaoPressionado";

const Contact = () => {
    // mantém o botão afundado por um tempo mínimo ao clicar
    const { pressionado, afundar } = useBotaoPressionado();

    // Estado inicial dos campos do formulário
    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    // Estado para armazenar os dados do formulário
    const [formDetails, setFormDetails] = useState(initialState);

    // Estado inicial das mensagens de status
    const statusInitialState = {
        success: false,
        message: "\u00A0", // Espaço não quebrável para manter o layout
    };

    // Estado para controlar o status do envio (sucesso/erro/loading)
    const [status, setStatus] = useState(statusInitialState);

    // Estado para controlar se está enviando o formulário
    const [isLoading, setIsLoading] = useState(false);

    // Função para atualizar o estado do formulário conforme o usuário digita
    const onValueChange = (fieldName: string, value: string) => {
        const updatedFormDetails = { ...formDetails, [fieldName]: value };
        setFormDetails(updatedFormDetails);
    };

    // Função principal para enviar a mensagem via EmailJS
    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validação básica: verifica se todos os campos estão preenchidos
        if (!formDetails.name || !formDetails.email || !formDetails.message) {
            setStatus({ success: false, message: "Por favor, preencha todos os campos." });
            return;
        }

        // Ativa o estado de loading (botão desabilitado)
        setIsLoading(true);
        // Mostra mensagem de "Enviando..." para o usuário
        setStatus({ ...statusInitialState, message: "Enviando..." });

        // Busca as variáveis de ambiente do EmailJS
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Verifica se todas as variáveis de ambiente estão configuradas
        if (!serviceId || !templateId || !publicKey) {
            setStatus({ success: false, message: "Erro de configuração. Tente novamente mais tarde." });
            setIsLoading(false);
            return;
        }

        try {
            // Envia o email usando o EmailJS
            await emailjs.send(serviceId, templateId, formDetails, publicKey);

            // Limpa o formulário após envio bem-sucedido
            setFormDetails(initialState);
            // Mostra mensagem de sucesso
            setStatus({ success: true, message: "Mensagem enviada com sucesso!" });
        } catch (error: unknown) {
            // Trata erros durante o envio
            let errorMessage = "Houve um erro ao enviar a mensagem.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setStatus({
                success: false,
                message: errorMessage,
            });
        } finally {
            // Sempre remove o estado de loading, independente do resultado
            setIsLoading(false);
        }
    };

    return (
        <section id={styles.contatoSection}>
            <div id={styles.divContato}>
                <h2>VAMOS TRABALHAR JUNTOS!</h2>
                <form onSubmit={onHandleSubmit}>
                    <label htmlFor="nome">
                        Nome
                        <input
                            type="text"
                            id="nome"
                            placeholder="Tadeu Bartolomeu de Andrade"
                            value={formDetails.name}
                            onChange={(e) => onValueChange("name", e.target.value)}
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            placeholder="dinossaurosirados@gmail.com"
                            value={formDetails.email}
                            onChange={(e) => onValueChange("email", e.target.value)}
                        />
                    </label>
                    <label htmlFor="mensagem">
                        Mensagem
                        <textarea
                            name=""
                            id="mensagem"
                            placeholder="sua mensagem..."
                            rows={4}
                            value={formDetails.message}
                            onChange={(e) => onValueChange("message", e.target.value)}
                        ></textarea>
                    </label>
                    <div className={styles.acoes}>
                        <button
                            type="submit"
                            className={pressionado ? styles.pressionado : undefined}
                            onPointerDown={afundar}
                            disabled={isLoading}
                        >
                            {isLoading ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                        <p className={`${status.success ? "text-green-500" : "text-red-500"} text-sm`}>
                            {status.message}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

// Exporta o componente para uso em outras partes da aplicação
export default Contact;
