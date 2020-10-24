import React from 'react';
import styled from 'styled-components';

const StyledOptions = styled.button`
    font-size: 2rem;
    margin-left: auto;
    padding: 0.5rem;
    border: none;
    justify-self: end;  
    color: ${props => props.theme.color || "tomato"};
    background-color: aliceblue;
    cursor: pointer;
    border-radius: 0.35rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const Options = (props) => {
    return (
        <StyledOptions theme={props.theme}>
            Options
        </StyledOptions>
    );
}

export default Options;