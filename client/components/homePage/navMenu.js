import React from 'react';

export default class NavMenu extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Characters</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Talents</a>
                    </li>
                  </ul>
                </nav>
            </div>
        );
    }
};
