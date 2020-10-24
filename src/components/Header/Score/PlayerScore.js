import React from 'react';
import styled from 'styled-components';
import { StyledName, StyledScore } from './StyledScore';

const StyledPlayerScore = styled.div`
    justify-self: end;
`

const PlayerScore = () => {
    return (
        <StyledPlayerScore>
            <StyledName>
                Player
            </StyledName>
            <StyledScore>
                0
            </StyledScore>
        </StyledPlayerScore>
    )
}

export default PlayerScore;