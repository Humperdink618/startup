import React from 'react';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <div className="navbar-brand">
                    Instant NOOOOO! Button
                </div>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <a  className="nav-link" href="index.html">
                            Home
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">
                            About
                            </a>
                    </li>
                </menu>
            </nav>

        </header>


        <main>App components go here</main>

        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Anton Anderson</span>
                <a className="text-reset" href="https://github.com/Humperdink618/startup">
                    GitHub
                </a>
            </div>
        </footer>
    </div>
  );
}