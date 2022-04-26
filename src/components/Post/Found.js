import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    padding: 2rem;
`

const Header = styled.h2`
    margin-top: 1.5rem;
    text-align: center;
`

const SubHeader = styled.p`
    margin-bottom: 1.5rem;
    margin-top: 0;
    color: #718096;
    font-weight: 500;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    background: url(${props => props.image}) no-repeat center center;
    background-size: cover;
    borer-radius: 0.375rem;
    
`

const Text = styled.p`
    text-align: justify;
    margin: 0;
    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    alighn-self: flex-start;

    &:hover {
        text-decoration: underline;
    }
`

const Found = ({ post }) => {
    const {title, subtitle, text, image } = post

    return <Component>
        <ImageWrapper image={image} />
        <Header>{title}</Header>
        <SubHeader>{subtitle}</SubHeader>
        {text.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
        ))}
        <StyledLink  to='/'>Go Back to Browsing All Posts</StyledLink>
    </Component>
}
export default Found