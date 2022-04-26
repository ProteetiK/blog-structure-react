import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const Component = styled.div`
    border-radius: 0.375rem;
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    display: flex;
    width: 100%;
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }
`

const Image = styled.div`
    width: 150px;
    height: 150px;
    background: url(${props => props.image}) no-repeat center center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 2rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h2`
    margin: 0 0 1rem 0;
    font-size: 1.75rem;
`

const Subtitle = styled.p`
    margin: 0;
`

const Item = ({ data }) => {
    
    const {id, title, subtitle, image} = data

    const handleClick = () =>  {
        navigate(`post/${id}`)
    }

    return (
        <Component onClick={handleClick}>
            <Image image={image} />
            <Content>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </Content>
        </Component>
    ) 
}

export default Item