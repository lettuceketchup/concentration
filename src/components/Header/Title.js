import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    color: ${props => props.theme.color || "tomato"};
    margin-right: auto;
`

const Title = (props) => {
    return (
        <StyledTitle theme={props.theme}>
            CONCENTRATION
        </StyledTitle>
    )
}

export default Title;