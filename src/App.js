import { React } from 'react';
import { Router } from '@reach/router';
import List from './components/List/List';
import Post from './components/Post/Post';
import posts from './data/posts';


const App = () => (
    <div>
        <Router>
            <List path='/' posts={posts} />
            <Post path='/:urlHere/:postId' posts={posts} />
        </Router>
    </div>
)
export default App
