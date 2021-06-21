import React from 'react';
import { useSelector } from 'react-redux';
import { dispatchSetError } from '../../store/dispatchers';
import { selectError } from '../../store/selectors';

import './styles.css'

const ErrorNotifier = () => {

    const error = useSelector(selectError)

    if(!error) return null

    return (
        <div className="error-notifier">
            <div>{error}</div>
            <small className="dismiss-button" onClick={() => dispatchSetError(null)}>dismiss</small>
        </div>
    );
};


export default ErrorNotifier;