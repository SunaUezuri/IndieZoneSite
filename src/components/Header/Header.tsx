import { Link } from "react-router-dom";
import { HeaderContainer, LogoText, LogoWrapper, ComboCounter } from "./Header.styles";
import { Menu } from "./components/Menu";
import { useMenu } from "./hooks/useMenu";
import { useComboClick } from "./hooks/useComboClick";

export default function Header() {
    const { menuOpen, toggleMenu } = useMenu();
    const { handleLogoClick, comboCount, milestoneText } = useComboClick();

    return (
        <HeaderContainer>
            
            <LogoWrapper onClick={handleLogoClick}>
                <LogoText>
                    <Link to="/" onClick={(e) => {
                        // Se o usuário clicar muito rápido, evitamos que o React Router tente navegar 100x pra Home
                        if (comboCount > 0) e.preventDefault();
                    }}>
                        INDIEZONE
                    </Link>
                </LogoText>
                
                {/* Só mostra o combo se passar de 2 cliques para instigar o usuário */}
                {comboCount > 2 && (
                    <ComboCounter 
                        key={comboCount}
                        $isMilestone={!!milestoneText}
                    >
                        {milestoneText ? milestoneText : `COMBO x${comboCount}`}
                    </ComboCounter>
                )}
            </LogoWrapper>
            
            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </HeaderContainer>
    );
}