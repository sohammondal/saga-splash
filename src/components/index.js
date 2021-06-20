import React, { Component } from 'react';

import Header from './Header';
import ImageGrid from './ImageGrid';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <ImageGrid />
            </>
        );
    }
}

export default App;
