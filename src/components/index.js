import React, { Component } from 'react';

import Header from './Header';
import ImageGrid from './ImageGrid';
import ErrorNotifier from './ErrorNotifier';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <ImageGrid />
                <ErrorNotifier />
            </>
        );
    }
}

export default App;
