import { Container } from "../Card/styles";

interface CardProps {
    name: string;
    email: string;
}

export const Card = ({ name, email }: CardProps) => {
    return (
        <Container>
            <h1>{name}</h1>

            <span>{email}</span>

            <button>Log out</button>
        </Container>
    );
};