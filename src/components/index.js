import React, { Component } from 'react';

import Header from './Header';
import ImageGrid from './ImageGrid';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ImageGrid />
            </div>
        );
    }
}

export default App;
