import React from 'react';
import NavMenu from './navMenu';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return(
            <div>
                <h3>Heroes of the Storm Characters</h3>
                <NavMenu/>
            </div>
        );
    }
};
