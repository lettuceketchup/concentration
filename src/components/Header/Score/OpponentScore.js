import React from 'react';
import styled from 'styled-components';
import { StyledName, StyledScore } from './StyledScore';

const StyledOpponentNScore = styled.div`
    justify-self: start;
`

const OpponentScore = () => {
    return (
        <StyledOpponentNScore>
            <StyledName>
                CPU
            </StyledName>
            <StyledScore>
                0
            </StyledScore>
        </StyledOpponentNScore>
    )
}

export default OpponentScore;