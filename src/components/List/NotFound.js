import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Component = styled.div`
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 4rem)
`

const Header = styled.h2`
    margin: 0;

    &:first-of-type {
        font-size: 2.5rem;
    }
    &:last-of-type {
        margin-top: 1rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    alighn-self: flex-start;
    padding: 2rem;
    font-family: 'Piazzolla', serif;
    font-size: 1.5rem;
    font-weight: bold;
`

const NotFound = () => <Component>
    <Header>Error: 404</Header>
    <Header>Sorry, we don't have that one here!</Header>
    <StyledLink  to='/'>Go Home</StyledLink>
</Component>

export default NotFound