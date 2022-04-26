import { Redirect } from '@reach/router';
import { React } from 'react';
import styled from 'styled-components/macro';

import Found from './Found';
import NotFound from './NotFound';

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

const Post = ({ urlHere, postId, posts }) => {
            const data = posts.filter((post) => post.id == postId)

            const handleURL = () => {
                if ((data[0]))
                {
                    console.log(urlHere)
                    return(<Found post={data[0]} />)
                } else {
                    return (<NotFound />)
                }
            }

            return (
                <Component>
                    <Wrapper>
                        {handleURL()}
                    </Wrapper>
                </Component>
            )
        }

export default Post