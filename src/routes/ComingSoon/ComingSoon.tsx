import { Link } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { 
    ComingSoonContainer, 
    Title, 
    Subtitle, 
    LoadingText, 
    BackButton 
} from "./ComingSoon.styles";

export default function ComingSoon() {
    document.title = "Indiezone | Em Breve";

    return (
        <ComingSoonContainer>
            <IoGameControllerOutline size={100} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            
            <Title className="pixel-font">FARMANDO XP...</Title>
            
            <Subtitle>
                Esta área ainda está bloqueada. Nossos devs estão tomando café e escrevendo códigos o mais rápido possível para liberar este novo nível!
            </Subtitle>
            
            <LoadingText className="pixel-font">LOADING LEVEL...</LoadingText>
            
            <Link to="/">
                <BackButton className="pixel-font">VOLTAR AO LOBBY</BackButton>
            </Link>
        </ComingSoonContainer>
    );
}