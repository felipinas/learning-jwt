import { Container } from "./styles";

export const LoginBox = () => {
    return (
        <Container>
            <h1>Login</h1>

            <form>
                <label htmlFor="email">Email</label>                
                <input type="email" id="email" autoComplete="off"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </Container>
    )
};