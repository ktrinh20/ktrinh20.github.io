import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render() {
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title == 'CV' && 
                                    <a className={item.cName} exact href={item.url}>
                                        {item.title}
                                    </a>}
                                {item.title != 'CV' &&
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar