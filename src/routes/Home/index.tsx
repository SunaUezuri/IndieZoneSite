import { useHomeData } from "./hooks/useHomeData";
import { 
    HomeContainer, 
    HeroSection, 
    HeroContent, 
    Section, 
    SectionTitle, 
    GameGrid 
} from "./Home.styles";
import { GameCard } from "../../components/GameCard/GameCard";
import { Loader } from "../../components/Loader/Loader";
import { ServerError } from "../../components/ServerError/ServerError";

export default function Home() {
    const { topRated, latest, heroBackground, loading, error } = useHomeData();

    document.title = "Indiezone | O Santuário Indie";

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ServerError message="Não foi possível conectar aos servidores da Indiezone." />
    }

    return (
        <HomeContainer>
            {/* Banner Dinâmico */}
            <HeroSection $bgImage={heroBackground}>
                <HeroContent>
                    <h2 className="pixel-font">
                        Descubra o <span>Inexplorado</span>
                    </h2>
                    <p>
                        A maior comunidade de desenvolvedores independentes e jogadores apaixonados. 
                        Jogue, avalie e molde o futuro da indústria.
                    </p>
                </HeroContent>
            </HeroSection>

            {/* Seção 1: Top Avaliados */}
            <Section>
                <SectionTitle className="pixel-font">HALL DA FAMA</SectionTitle>
                <GameGrid>
                    {topRated.length > 0 ? (
                        topRated.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))
                    ) : (
                        <p>Nenhum jogo avaliado ainda.</p>
                    )}
                </GameGrid>
            </Section>

            {/* Seção 2: Lançamentos */}
            <Section>
                <SectionTitle className="pixel-font">RECÉM CHEGADOS</SectionTitle>
                <GameGrid>
                    {latest.length > 0 ? (
                        latest.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))
                    ) : (
                        <p>Nenhum lançamento encontrado.</p>
                    )}
                </GameGrid>
            </Section>
        </HomeContainer>
    );
}