import React from 'react';
import HeroListItem from './heroListItem';

export default class HeroesList extends React.Component {
    constructor(props) {
        super(props);
    }

    createListItems(props) {
        return this.props.names.map((name) => {
            return (
                <HeroListItem name={name}/>
            )
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.createListItems()}
            </ul>
        )
    }
}
