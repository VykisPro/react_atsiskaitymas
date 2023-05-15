import styled from "styled-components";

const StyledMain = styled.main`
    min-height: calc(60vh - 100px - 75px);
    display: flex;
    justify-content: center;
    align-items: center;

    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        > div {
            width: 450px;
            display: grid;
            grid-template-columns: 150px 300px;
            grid-template-rows: 2rem;
            > label {
                border: 3px solid black;
                line-height: 2rem;
                padding-left: 0.5rem;
            }
            > input {
                border: none;
                border: 3px solid black;
                border-left: 0;
            }
        }
        .genderPicker {
            display: grid;
            grid-template-columns: 50px 100px 50px 100px 50px 100px;
            grid-template-rows: 2rem;
            border: 3px solid black;
            font-size: 1rem;
            > label {
                border: none;
            }
            > input{
                height: 1rem;
                margin: 0;
                margin: auto 0;
                margin-left: 1rem;
                margin-right: auto;
            }
        }
        > button {
            width: 450px;
            border: 3px solid black;
            height: 2rem;
            background-color: black;
            font-size: 1.25rem;
            color:white;
        }
        > button:hover{
            cursor: pointer;
            background-color: green;
        }
    }
`;


const Register = () => {
    return (  
        <StyledMain>
                <form>
                    <div>
                        <label htmlFor="userName">Enter username: </label>
                        <input type="text" id="userName" name="userName"/>
                    </div>
                    <div>
                        <label htmlFor="email">Enter email: </label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="genderPicker">
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="other">Other</label>
                        <input type="radio" id="other" name="gender" value="other"/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter password: </label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat password: </label>
                        <input type="repeatPassword" id="repeatPassword" name="repeatPassword" />
                    </div>
                    <button>Register</button>
                </form>
        </StyledMain>
    );
}
 
export default Register;