import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { GameResponse } from "../../../types/game";

export function useHomeData() {
    const [topRated, setTopRated] = useState<GameResponse[]>([]);
    const [latest, setLatest] = useState<GameResponse[]>([]);
    const [heroBackground, setHeroBackground] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                setLoading(true);
                const [topRatedRes, latestRes] = await Promise.all([
                    api.get<GameResponse[]>('/jogos/top-avaliados'),
                    api.get<GameResponse[]>('/jogos/lancamentos')
                ]);

                const fetchedTopRated = topRatedRes.data;
                const fetchedLatest = latestRes.data;

                setTopRated(fetchedTopRated);
                setLatest(fetchedLatest);

                // Junta todos os jogos, remove os que não têm capa, e sorteia um
                const allGames = [...fetchedTopRated, ...fetchedLatest].filter(g => g.urlCapa);
                
                if (allGames.length > 0) {
                    const randomGame = allGames[Math.floor(Math.random() * allGames.length)];
                    setHeroBackground(randomGame.urlCapa);
                } else {
                    // Fallback de segurança caso nenhum jogo tenha imagem
                    setHeroBackground("https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600");
                }

            } catch (err) {
                console.error("Erro ao carregar dados da Home:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    return { topRated, latest, heroBackground, loading, error };
}