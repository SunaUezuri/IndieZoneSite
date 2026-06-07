import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import { Footer } from "./components/Footer/Footer";
import styled from "styled-components";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { SecretNotification } from "./components/SecretNotification/SecretNotification";
import { useConsoleGreeting } from "./hooks/useConsoleGreeting";

const AppLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1; /* O conteúdo principal empurra o footer para baixo */
`;

export default function App(){
  const { showNotification } = useKonamiCode();
  useConsoleGreeting();

  return(
    <AppLayout>
      <GlobalStyle />

      {showNotification && <SecretNotification />}

      <Header />
      <MainContent>
          <Outlet />
      </MainContent>
      <Footer />
    </AppLayout>
  )

}