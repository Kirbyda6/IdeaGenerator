import React from 'react';

function Split({ ideas }) {
    return (
        <p>Idea: {ideas?.idea} | Creator: {ideas?.creator}</p>
    );
}

export default Split;