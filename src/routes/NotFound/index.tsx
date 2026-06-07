import { Link } from "react-router-dom";
import { usePong } from "./hooks/usePong";
import { 
    NotFoundContainer, 
    Title, 
    Subtitle, 
    GameCanvas, 
    ScoreBoard, 
    BackButton 
} from "./NotFound.styles";

export default function NotFound() {
    document.title = "Indiezone | 404 - Not Found";
    
    const { canvasRef, score } = usePong();

    return (
        <NotFoundContainer>
            <Title className="pixel-font">ERRO 404</Title>
            <Subtitle>Parece que o link que você tentou acessar está em outro castelo. Enquanto isso, jogue uma partida contra o Bot da Indiezone!</Subtitle>
            
            <ScoreBoard className="pixel-font">
                <span className="player">{score.player}</span>
                <span className="ai">{score.ai}</span>
            </ScoreBoard>

            <GameCanvas 
                ref={canvasRef} 
                width={600} 
                height={400} 
            />

            <Link to="/">
                <BackButton className="pixel-font">VOLTAR AO LOBBY</BackButton>
            </Link>
        </NotFoundContainer>
    );
}