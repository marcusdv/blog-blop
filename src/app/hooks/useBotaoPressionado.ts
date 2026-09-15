"use client";
import { useEffect, useRef, useState } from "react";

// Tempo mínimo que o botão fica afundado, mesmo num clique rápido.
// 250ms da descida (transition do CSS) + 1,5s parado lá embaixo.
const TEMPO_PRESSIONADO = 1750;

/**
 * Segura o estado "pressionado" de um botão por um tempo mínimo.
 * Só com :active o efeito duraria o tempo do clique, que é quase imperceptível.
 *
 * Uso: const { pressionado, afundar } = useBotaoPressionado();
 *      <button className={pressionado ? styles.pressionado : undefined} onPointerDown={afundar}>
 */
export function useBotaoPressionado(tempo: number = TEMPO_PRESSIONADO) {
    const [pressionado, setPressionado] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // evita deixar timer solto se o componente sair da tela no meio da animação
    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    function afundar() {
        setPressionado(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setPressionado(false), tempo);
    }

    return { pressionado, afundar };
}
