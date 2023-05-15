import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 170px;
    border-bottom: 3px solid black;
    background-color:silver;
    font-color:white;
    >img {
        height: 100px;
    }
    > ul {
        display: flex;
        gap: 3rem;
        > li {
            list-style-type: none;
            font-size: 1.8rem;
            font-weight: bold;
        }
    }
`;

const Header = () => {
    const {currentUser} = useContext(UsersContext);

    return ( 
        <StyledHeader>
            <img src="https://images.squarespace-cdn.com/content/v1/618bf212f2e0777ee00311d0/1643735360487-NRROQCEWCNRFYNLNGP6R/Evil_Corp_logo.png" alt="logo" />
            <ul>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/post'}>Post</Link></li>
            </ul>
        </StyledHeader>
     );
}
 
export default Header;