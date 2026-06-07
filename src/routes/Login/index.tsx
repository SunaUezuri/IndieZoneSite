import { Link } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { 
    LoginContainer, 
    LoginCard, 
    LoginHeader, 
    LoginForm, 
    InputGroup, 
    InputWrapper, 
    SubmitButton, 
    LoginFooter 
} from "./Login.styles";

export default function Login() {
    document.title = "Indiezone | Entrar";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Aqui faremos a chamada da API no futuro!");
    };

    return (
        <LoginContainer>
            <LoginCard>
                <LoginHeader>
                    <h1 className="pixel-font">LOGIN</h1>
                    <p>Bem-vindo de volta ao Santuário Indie.</p>
                </LoginHeader>

                <LoginForm onSubmit={handleSubmit}>
                    <InputGroup>
                        <label className="pixel-font">E-MAIL</label>
                        <InputWrapper>
                            <input 
                                type="email" 
                                placeholder="player@indiezone.com" 
                                required 
                            />
                            <IoMailOutline />
                        </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                        <label className="pixel-font">SENHA</label>
                        <InputWrapper>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                required 
                            />
                            <IoLockClosedOutline />
                        </InputWrapper>
                    </InputGroup>

                    <SubmitButton type="submit" className="pixel-font">
                        PRESS START
                    </SubmitButton>
                </LoginForm>

                <LoginFooter>
                    <p>
                        Esqueceu sua senha? <Link to="/coming-soon">Recuperar XP</Link>
                    </p>
                    <p>
                        Ainda não tem conta? <Link to="/coming-soon">Criar Personagem</Link>
                    </p>
                </LoginFooter>
            </LoginCard>
        </LoginContainer>
    );
}