import styled from "styled-components";


const StyledFooter = styled.footer`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-top: 3 px solid black;
    position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
    > div {
        padding-right: 2rem;
        text-align: center;
        > p {
            margin: 0;
            margin-bottom: 0.5rem;
        }
        > div {
            display: flex;
            gap: 1rem;
        }
    }
`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <p>© {new Date().getFullYear()} </p>
            <div>
                <p>E Corp   !</p>
                <div>
                 <p>ikona 1</p>
                 <p>ikona 2</p>
                 <p>ikona 3</p>
                 <p>ikona 4</p>
                </div>
            </div>
        </StyledFooter>
     );
}
 
export default Footer;