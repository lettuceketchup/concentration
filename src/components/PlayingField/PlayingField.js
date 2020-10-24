import React from 'react';
import styled from 'styled-components';

const StyledPlayingField = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
`

const PlayingField = ({ size, cardSet, cardType }) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    console.log('Card Set: ', cardSet);

    return (
        <StyledPlayingField size={size}>
            {
                cardSet
            }
        </StyledPlayingField>
    );
}

export default PlayingField;