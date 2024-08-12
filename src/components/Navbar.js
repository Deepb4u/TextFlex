import React from 'react'
import propType from 'prop-types'
// import { a } from 'react-router-dom'

export default function Navbar (props) {
    return(
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
            </div>
            <div className={`form-check form-switch text-${props.txtColor}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">Enable {props.txtColor} mode</label>
            </div>
        </div>
    </nav>
    )
}

Navbar.propType= {
    title: propType.string,
    aboutTxt: propType.string
}
// Navbar.defaultProps = {
//     title: 'set title here',
//     aboutTxt: 'About text here'
// };