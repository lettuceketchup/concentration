import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.h1`
    color: ${props => props.disabled ? '#bbb' : '#888'};
    justify-self: center;
    font-size: 3rem;
    font-weight: 500;
    margin: auto;
`

const Timer = () => {
    return (
        <StyledTimer disabled>
            00
        </StyledTimer>
    )
}

export default Timer;