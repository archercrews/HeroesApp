import React from 'react';

export default class NavMenu extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
                </nav>
            </div>
        );
    }
};
