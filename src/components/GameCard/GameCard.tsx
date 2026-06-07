import { FaStar } from "react-icons/fa6";
import { Card, CardImage, CardContent, Title, Developer, FooterCard, Rating, Genres } from "./GameCard.styles";
import { Link } from "react-router-dom";
import { GameCardProps } from "./types/types";

export function GameCard({ game }: GameCardProps) {
    // Pega apenas o primeiro gênero
    const mainGenre = game.generos.length > 0 ? game.generos[0] : "OUTROS";

    return (
        <Link to={`/jogo/${game.id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardImage $bgUrl={game.urlCapa} />
                <CardContent>
                    <Title>{game.titulo}</Title>
                    <Developer>{game.nomeCriador}</Developer>
                    
                    <FooterCard>
                        <Genres>{mainGenre}</Genres>
                        <Rating>
                            <FaStar /> {game.notaMedia.toFixed(1)}
                        </Rating>
                    </FooterCard>
                </CardContent>
            </Card>
        </Link>
    );
}