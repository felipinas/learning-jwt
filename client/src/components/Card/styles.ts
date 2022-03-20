import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: white;

    border-radius: .25rem;
    padding: 2.5rem 2rem;

    color: #161618;

    button {
        width: 100%;
        height: 2.5rem;
        
        margin-top: 2rem;

        border: none;
        border-radius: .25rem;

        font-weight: 600;
        background-color: rgb(255, 229, 229);
        color: rgb(205, 43, 49);

        cursor: pointer;
        transition: all .2s;

        &:hover {
            background-color: rgb(253, 216, 216);
        }
    }
`;
