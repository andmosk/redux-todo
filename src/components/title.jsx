import React from 'react';

const Title = ({todoCount}) => {
    return (
        <div>
            <h1 className="text-center">To-Do ({todoCount})</h1>
        </div>
    );
};

export default Title;