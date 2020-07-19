import React from 'react';

import './alert.scss';

function Alert({ message }) {
    return (
        <div className="alert alert-warning" role="alert">
            {message}
        </div>
    );
}

export default Alert;
