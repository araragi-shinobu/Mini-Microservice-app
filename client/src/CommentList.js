import React from 'react';

const App = ({ comments }) => {
    const renderComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>
        {renderComments}
    </ul>

};

export default App;
