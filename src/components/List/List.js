import React from 'react';
import styled from 'styled-components';
import Item from './Item'

const Component = styled.div`
    background-color: #fafafa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`

const List = ({ posts }) => {
    return (
        <Component>
            <Wrapper>
                {posts.map(post => (
                    <Item key={post.id} data={post} />
                ))}
            </Wrapper>
        </Component>
    )
}

export default List