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
                                {(item.title === 'CV' || item.title === 'Graphics') ? 
                                    <a className={item.cName} href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a> :
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar