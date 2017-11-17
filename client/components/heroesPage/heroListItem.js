import React from 'react';

export default class HeroListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
            <li className="list-group-item">{this.props.name}</li>
        )
    }
}
