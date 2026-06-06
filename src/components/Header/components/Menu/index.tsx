import { MenuProps } from "../../types/headerTypes";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { MenuWrapper, NavContainer, MobileIcon } from "./Menu.styles";


export function Menu({ menuOpen, toggleMenu}: MenuProps) {
    return (
        <MenuWrapper>
            <MobileIcon onClick={toggleMenu}>
                {menuOpen ? (
                    <IoCloseSharp size={35} color="var(--secondary)" />
                ) : (
                    <TiThMenu size={35} color="var(--secondary)" />
                )}
            </MobileIcon>

            <NavContainer $isOpen={menuOpen}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Vitrine</Link></li>
                    <li><Link to="/sobre" onClick={toggleMenu}>Sobre</Link></li>
                    <li><Link to="/login" onClick={toggleMenu} className="pixel-font nav-button">
                            Login
                        </Link></li>
                </ul>
            </NavContainer>
        </MenuWrapper>
    )
}