import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 420px;

    display: flex;
    flex-direction: column;

    background: white;
    border-radius: .25rem;
    padding: 2.5rem 2rem;

    color: #161618;

    h1 {
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: .7rem;
        }

        input {
            height: 2.5rem;

            margin-bottom: 1rem;
            padding: 0 .7rem;

            outline: none;
            border: none;
            border-radius: .25rem;
            font-size: 1rem;

            color: rgb(87, 70, 175);
            box-shadow: rgb(196, 184, 243) 0px 0px 0px 1px;
            
            &:focus {
                box-shadow: rgb(170 153 236) 0px 0px 0px 2px
            }
        }

        div {
            display: flex;
            justify-content: flex-end;

            button {
                width: 50%;
                height: 2.5rem;

                border: none;
                border-radius: .25rem;

                font-weight: 600;
                font-size: 1rem;

                background-color: rgb(221, 243, 228);
                color: rgb(24, 121, 78);

                cursor: pointer;
                transition: all .2s;

                &:hover {
                    background-color: rgb(204, 235, 215);
                }
            }
        }  
    }
`;
