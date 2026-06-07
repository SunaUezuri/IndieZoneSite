import { useEffect, useRef, useState } from "react";

// Definindo as cores constantes para o jogo
const COLORS = {
    background: "#0f051d",
    primaryNeon: "#00f5b1",
    secondaryNeon: "#7b2cbf",
    text: "#eee",
};

export function usePong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState({ player: 0, ai: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        // --- ESTADO DO JOGO ---
        const rectWidth = 10;
        const rectHeight = 80;
        const ballSize = 10;
        const netWidth = 2; 

        // Player usa a cor Neon Principal
        const player = { x: 10, y: canvas.height / 2 - rectHeight / 2, width: rectWidth, height: rectHeight, color: COLORS.primaryNeon, score: 0 };
        // AI usa o Roxo Neon
        const ai = { x: canvas.width - 20, y: canvas.height / 2 - rectHeight / 2, width: rectWidth, height: rectHeight, color: COLORS.secondaryNeon, score: 0 };
        const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: ballSize, speed: 5, velocityX: 5, velocityY: 5, color: COLORS.text };
        const net = { x: canvas.width / 2 - netWidth / 2, y: 0, width: netWidth, height: 15, color: "rgba(123, 44, 191, 0.2)" }; // Rede translúcida

        // --- CONTROLES ---
        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            // Restringir a raquete para não sair do canvas (mais clean)
            let mouseY = event.clientY - rect.top - player.height / 2;
            mouseY = Math.max(0, Math.min(canvas.height - player.height, mouseY));
            player.y = mouseY;
        };
        canvas.addEventListener("mousemove", handleMouseMove);

        // --- FUNÇÕES DE DESENHO COM GLOW ---
        const drawRect = (x: number, y: number, w: number, h: number, color: string, glow: boolean = false) => {
            ctx.fillStyle = color;
            
            if (glow) {
                ctx.shadowColor = color;
                ctx.shadowBlur = 10;
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.fillRect(x, y, w, h);
            ctx.shadowBlur = 0;
        };

        const drawCircle = (x: number, y: number, r: number, color: string, glow: boolean = false) => {
            ctx.fillStyle = color;
            
            if (glow) {
                ctx.shadowColor = color;
                ctx.shadowBlur = 10;
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0; // Resetar
        };

        const drawNet = () => {
            for (let i = 0; i <= canvas.height; i += 25) {
                drawRect(net.x, net.y + i, net.width, net.height, net.color, false);
            }
        };

        // --- FÍSICA E LÓGICA ---
        const collision = (b: typeof ball, p: typeof player) => {
            const pTop = p.y;
            const pBottom = p.y + p.height;
            const pLeft = p.x;
            const pRight = p.x + p.width;

            const bTop = b.y - b.radius;
            const bBottom = b.y + b.radius;
            const bLeft = b.x - b.radius;
            const bRight = b.x + b.radius;

            return pLeft < bRight && pTop < bBottom && pRight > bLeft && pBottom > bTop;
        };

        const resetBall = () => {
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.speed = 5;
            ball.velocityX = -ball.velocityX; // Manda a bola para o outro lado
        };

        const update = () => {
            // Move a bola
            ball.x += ball.velocityX;
            ball.y += ball.velocityY;

            // IA simples
            const aiLevel = 0.08; // Um pouco mais devagar para ser mais vencível e clean
            ai.y += (ball.y - (ai.y + ai.height / 2)) * aiLevel;
            // Limitar a IA dentro do canvas
            ai.y = Math.max(0, Math.min(canvas.height - ai.height, ai.y));

            // Colisão com teto e chão
            if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
                ball.velocityY = -ball.velocityY;
            }

            // Verifica qual raquete está tentando rebater
            const playerOrAi = (ball.x + ball.radius < canvas.width / 2) ? player : ai;

            if (collision(ball, playerOrAi)) {
                // Ponto exato de colisão para calcular o ângulo
                let collidePoint = (ball.y - (playerOrAi.y + playerOrAi.height / 2));
                collidePoint = collidePoint / (playerOrAi.height / 2); // Normaliza entre -1 e 1

                const angleRad = (Math.PI / 4) * collidePoint; // 45 graus máximo

                const direction = (ball.x + ball.radius < canvas.width / 2) ? 1 : -1;
                ball.velocityX = direction * ball.speed * Math.cos(angleRad);
                ball.velocityY = ball.speed * Math.sin(angleRad);

                ball.speed += 0.3; // Aumenta a velocidade sutilmente
            }

            // Pontuação
            if (ball.x - ball.radius < 0) {
                ai.score++;
                setScore({ player: player.score, ai: ai.score });
                resetBall();
            } else if (ball.x + ball.radius > canvas.width) {
                player.score++;
                setScore({ player: player.score, ai: ai.score });
                resetBall();
            }
        };

        const render = () => {
            // Limpa o canvas (sem glow)
            drawRect(0, 0, canvas.width, canvas.height, COLORS.background, false);

            drawNet(); // Sem glow
            // Desenha as raquetes com glow
            drawRect(player.x, player.y, player.width, player.height, player.color, true);
            drawRect(ai.x, ai.y, ai.width, ai.height, ai.color, true);
            // Desenha a bola com glow
            drawCircle(ball.x, ball.y, ball.radius, ball.color, true);
        };

        const gameLoop = () => {
            update();
            render();
            animationFrameId = requestAnimationFrame(gameLoop);
        };

        // Inicia o jogo
        gameLoop();

        // Limpeza (Clean up) quando o componente for desmontado
        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return { canvasRef, score };
}