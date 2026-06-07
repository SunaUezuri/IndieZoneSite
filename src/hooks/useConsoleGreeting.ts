import { useEffect } from "react";

export function useConsoleGreeting() {
    useEffect(() => {
        const bitArt = `
      _____
     [ O_O ]
    /|_____|\\
     _|_|_|_
        `;

        const titleStyle = "color: #00f5b1; font-size: 18px; font-weight: bold; font-family: 'Courier New', monospace;";
        const textStyle = "color: #bfa0ff; font-size: 14px; font-family: 'Courier New', monospace;";
        const highlightStyle = "color: #00f5b1; font-size: 14px; font-weight: bold; background-color: #1e0b36; padding: 2px 4px; border-radius: 4px;";

        console.log(
            `%c${bitArt}\nINDIEZONE DEV CONSOLE\n\n%cVocê encontrou o nosso esconderijo secreto!\nSe você está lendo isso, provavelmente é um dev farmando XP (ou apertou F12 sem querer).\nSinta-se livre para debugar, inspecionar e se inspirar.\n\n%cGG WP! 💜`, 
            titleStyle, 
            textStyle, 
            highlightStyle
        );
    }, []);
}