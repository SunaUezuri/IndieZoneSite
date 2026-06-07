import { Overlay, MascotText, LoadingText } from "./Loader.styles";

export function Loader() {
    return (
        <Overlay>
            <MascotText />
            <LoadingText className="pixel-font">LOADING LEVEL...</LoadingText>
        </Overlay>
    );
}