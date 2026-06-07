import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaXTwitter, FaGithub, FaTwitch } from "react-icons/fa6";
import { 
    FooterContainer, 
    FooterContent, 
    BrandSection, 
    SocialLinks, 
    LinksSection, 
    FooterBottom,
    SecretButton,
    HallOfFame
} from "./Footer.styles";

export function Footer() {
    const currentYear = new Date().getFullYear();
    // Estado que controla o Easter Egg do Hall da Fama
    const [showCredits, setShowCredits] = useState(false);

    return (
        <FooterContainer>
            <FooterContent>
                
                <BrandSection>
                    <h2 className="pixel-font">INDIEZONE</h2>
                    <p>O santuário dos desenvolvedores independentes. Jogue, avalie e apoie a cena indie.</p>
                    <SocialLinks>
                        <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord size={24} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaXTwitter size={24} /></a>
                        <a href="https://twitch.tv" target="_blank" rel="noreferrer" aria-label="Twitch"><FaTwitch size={24} /></a>
                        <a href="https://github.com/SunaUezuri/IndieZoneSite" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
                    </SocialLinks>
                </BrandSection>

                <LinksSection>
                    <h3 className="pixel-font">Comunidade</h3>
                    <ul>
                        <li><Link to="/sobre">Sobre Nós</Link></li>
                        <li><Link to="/coming-soon">Fórum</Link></li>
                        <li><Link to="/coming-soon">Apoie um Dev</Link></li>
                    </ul>
                </LinksSection>

                <LinksSection>
                    <h3 className="pixel-font">Plataforma</h3>
                    <ul>
                        <li><Link to="/login">Publicar Jogo (Devs)</Link></li>
                        <li><Link to="/coming-soon">Termos de Uso</Link></li>
                        <li><Link to="/coming-soon">Privacidade</Link></li>
                        {/* Truque do mailto para o MVP */}
                        <li><a href="mailto:bug.report@indiezone.com.br?subject=Reporte%20de%20Bug">Reportar Bug</a></li>
                    </ul>
                </LinksSection>

            </FooterContent>

            <FooterBottom>
                <p>
                    © {currentYear} Indiezone. Todos os direitos reservados. 
                    Feito com 💜 e muito café.{" "}
                    <SecretButton onClick={() => setShowCredits(!showCredits)}>
                        GG WP!
                    </SecretButton>
                </p>

                {/* A caixa secreta que revela os testadores/colaboradores */}
                <HallOfFame $show={showCredits}>
                    <h4 className="pixel-font">HALL DA FAMA</h4>
                    <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginBottom: '1rem' }}>
                        Agradecimentos especiais aos heróis que ajudaram a testar e construir a Indiezone:
                    </p>
                    <ul className="pixel-font">
                        <li>Nicolas Sena</li>
                        <li>Nicoly Freitas</li>
                        <li>Jacqueline Vivot</li>
                        <li>Rafael Tinoco</li>
                    </ul>
                </HallOfFame>
            </FooterBottom>
        </FooterContainer>
    );
}