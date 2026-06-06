// src/components/Header/hooks/useComboClick.ts
import { useState, useRef, useCallback } from 'react';

export function useComboClick() {
    const [comboCount, setComboCount] = useState(0);
    const [milestoneText, setMilestoneText] = useState("");
    const timeoutRef = useRef<number | null>(null);
    
    // Referência para guardar uma ÚNICA instância do motor de áudio
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Função para inicializar o áudio apenas uma vez e "acordá-lo"
    const initAudio = () => {
        if (!audioCtxRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
                audioCtxRef.current = new AudioContextClass();
            }
        }
        
        // Navegadores suspendem o áudio por padrão até o usuário interagir
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
    };

    const triggerConfetti = useCallback((amount: number) => {
        const colors = ['#7b2cbf', '#00ff88', '#ff0055', '#ffffff', '#ffd700'];
        
        for (let i = 0; i < amount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.top = '-20px';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.width = `${Math.random() * 8 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.zIndex = '9999';
            particle.style.pointerEvents = 'none';
            document.body.appendChild(particle);

            const duration = Math.random() * 2000 + 1000;
            const animation = particle.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
            ], { duration, easing: 'linear', fill: 'forwards' });

            animation.onfinish = () => particle.remove();
        }
    }, []);

    const playSound = useCallback((type: 'click' | 'milestone' | 'epic', pitchMultiplier: number = 1) => {
        initAudio(); // Garante que o áudio está pronto e acordado
        const audioCtx = audioCtxRef.current;
        if (!audioCtx) return;

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600 + (pitchMultiplier * 20), audioCtx.currentTime);
                
                // Volume ligeiramente aumentado (0.1 ao invés de 0.05) para garantir que você ouça
                gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.1);
            } else {
                osc.type = 'square';
                const baseFreq = type === 'epic' ? 659.25 : 440;
                
                osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
                osc.frequency.setValueAtTime(baseFreq * 1.25, audioCtx.currentTime + 0.1);
                osc.frequency.setValueAtTime(baseFreq * 1.5, audioCtx.currentTime + 0.2);
                
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime); // Volume mais alto para os marcos
                gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
                
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.4);
            }
        } catch (e) {
            console.warn("Erro ao reproduzir o som:", e);
        }
    }, []);

    const getMilestoneText = (clicks: number) => {
        if (clicks === 10) return "FIRST BLOOD!";
        if (clicks === 50) return "UNSTOPPABLE!";
        if (clicks === 100) return "GODLIKE!!!";
        if (clicks > 100) return "AUTOCLICKER?!";
        return "NICE!";
    };

    const handleLogoClick = () => {
        setComboCount((prev) => {
            const current = prev + 1;
            
            playSound('click', current);

            let isMilestone = false;
            let confettiAmount = 0;

            if (current <= 100 && current % 10 === 0) {
                isMilestone = true;
                confettiAmount = current * 2;
            } else if (current > 100 && current % 50 === 0) {
                isMilestone = true;
                confettiAmount = 300;
            }

            if (isMilestone) {
                triggerConfetti(confettiAmount);
                playSound(current >= 100 ? 'epic' : 'milestone');
                setMilestoneText(getMilestoneText(current));
            } else {
                setMilestoneText(""); 
            }

            return current;
        });

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = window.setTimeout(() => {
            setComboCount(0);
            setMilestoneText("");
        }, 2000);
    };

    return { handleLogoClick, comboCount, milestoneText };
}