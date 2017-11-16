import React from 'react';
import HeroesList from './heroesList';

export default class HeroesContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            heroNames: [],
            heroesData: []
        }
    }

    componentDidMount() {
        fetch('https://hotsapi.net/api/v1/heroes')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({heroesData: data});
        })
    }

    // Takes the list of heroes and returns array of hero names.
    heroesList(heroesArray) {
        var heroes = heroesArray.map((hero) => {
            var heroNames = [];
            heroNames.push(hero.name);
            return heroNames;
        })
        return heroes;
    }

    render() {
        this.state.heroNames = this.heroesList(this.state.heroesData);
        return (
            <div className="container">
                <HeroesList names={this.state.heroNames} />
            </div>
        );
    }
};
