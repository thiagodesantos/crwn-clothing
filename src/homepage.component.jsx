import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Bonés</h1>
                    <span className="subtitle">Comprar Agora</span>
                </div>
            </div>
             <div className="menu-item">
                <div className="content">
                    <h1 className="title">Jaquetas</h1>
                    <span className="subtitle">Comprar Agora</span>
                </div>
            </div>
             <div className="menu-item">
                <div className="content">
                    <h1 className="title">Tênis</h1>
                    <span className="subtitle">Comprar Agora</span>
                </div>
            </div>
             <div className="menu-item">
                <div className="content">
                    <h1 className="title">Mulheres</h1>
                    <span className="subtitle">Comprar Agora</span>
                </div>
            </div>
             <div className="menu-item">
                <div className="content">
                    <h1 className="title">Homens</h1>
                    <span className="subtitle">Comprar Agora</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;