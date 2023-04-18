//ARticlelist.js

import React from 'react';
import Article from './Article';

function ARticlelist(props) {
    const {posts} = props;

    return (
        <main>
            {posts.map(post => (
                <article key={post.id} post={post} />
            ))}
        </main>
    );
}

export default ARticlelist;