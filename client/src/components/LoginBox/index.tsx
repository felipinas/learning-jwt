import { Container } from "./styles";

export const LoginBox = () => {
    return (
        <Container>
            <h1>Login</h1>

            <form>
                <label htmlFor="name">Name</label>                
                <input type="text" id="name" autoComplete="off"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </Container>
    )
};