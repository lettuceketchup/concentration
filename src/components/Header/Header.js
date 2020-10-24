import React from 'react';
import styled from 'styled-components';
import Options from './Options';
import OpponentScore from './Score/OpponentScore';
import PlayerScore from './Score/PlayerScore';
import Timer from './Timer';
import Title from './Title';

const TopBar = styled.nav`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   
    display: grid;
    grid-template-columns: 20% auto auto auto 20%;
    padding: 0.5rem 1rem;
    border-bottom: 4px ${props => props.theme.color || "tomato"} solid;
    box-shadow: 0px 1px 2px -1px ${props => props.theme.color || "tomato"};
`

const Header = (props) => {
    return (
        <TopBar theme={props.theme}>
            <Title theme={props.theme} />
            <PlayerScore />
            <Timer />
            <OpponentScore />
            <Options theme={props.theme} />
        </TopBar>
    )
}

export default Header;