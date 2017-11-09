import React from 'react';

export default class HeroesContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        fetch('https://hotsapi.net/api/v1/heroes')
        .then(results => {
            return results.json();
        }).then(data => {
            var heroes = data;
            this.setState({heroes: heroes});
        })
    }


    render() {
        heroesList() {
            var heroes = this.state.heroes.map((hero) => {
                var heroNames [];
                heroNames.push(hero.name);
                return heroNames;
                debugger;
            })
            return (
                heroes.map((name) => {
                    <li className="list-group-item active">{name}</li>
                });
            );
        }

        return (
            <div className="container">
                <ul className="list-group">
                  {heroesList()}

                </ul>
            </div>
        );
    }
};
