import { ErrorContainer, DeathText, Subtitle, RespawnButton } from "./ServerError.styles";
import { ServerErrorProps } from "./types/types";

export function ServerError({ message = "A conexão com a fogueira foi perdida (Erro 500)." }: ServerErrorProps) {
    const handleRespawn = () => {
        window.location.reload();
    };

    return (
        <ErrorContainer>
            <DeathText>SERVER DIED</DeathText>
            <Subtitle>{message}</Subtitle>
            
            <RespawnButton onClick={handleRespawn}>
                Tocar a Fogueira (Tentar Novamente)
            </RespawnButton>
        </ErrorContainer>
    );
}