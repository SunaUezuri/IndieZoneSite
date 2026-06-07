import { useEffect, useState, useRef, useCallback } from "react";

// Sequência exata: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, b, a
const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"
];

export function useKonamiCode() {
    const [showNotification, setShowNotification] = useState(false);
    const codePattern = useRef<string[]>([]);
    const audioCtxRef = useRef<AudioContext | null>(null);

    const playRetroSound = useCallback(() => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContextClass) return;

            if (!audioCtxRef.current) {
                audioCtxRef.current = new AudioContextClass();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === "suspended") ctx.resume();

            const now = ctx.currentTime;
            
            // Sequência rápida de notas ascendentes (Arpejo)
            const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
            
            notes.forEach((freq, index) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = "square"; // Onda quadrada para som de Nintendinho
                osc.frequency.setValueAtTime(freq, now + index * 0.06);
                
                gain.gain.setValueAtTime(0.08, now + index * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.1);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(now + index * 0.06);
                osc.stop(now + index * 0.06 + 0.1);
            });
        } catch (e) {
            console.warn("Áudio do Konami Code bloqueado pelo navegador.", e);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Adiciona a tecla pressionada ao array
            codePattern.current.push(event.key);
            
            // Mantém o tamanho do array igual ao tamanho do código secreto
            if (codePattern.current.length > KONAMI_CODE.length) {
                codePattern.current.shift();
            }

            // Verifica se a sequência bate com o Konami Code
            const isMatch = codePattern.current.every((key, index) => key === KONAMI_CODE[index]);

            if (isMatch) {
                const body = document.body;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const isRetroActive = body.classList.toggle("retro-mode");

                playRetroSound();
                setShowNotification(true);
                codePattern.current = []; // Reseta a sequência

                // Esconde o pop-up de aviso após 4 segundos
                setTimeout(() => {
                    setShowNotification(false);
                }, 4000);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [playRetroSound]);

    return { showNotification };
}