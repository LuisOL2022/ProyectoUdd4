import React from 'react';


const Menu = () => {
return (
    <div className="menu">
    <h2 className="menu-title">Nuestro Menú</h2>
    <div className="menu-items">
        <div className="menu-item">
        <img src="uno.jpg" alt="Plato 1" />
        <h3>Italiano XL</h3>
        <p>Completo italiano que trae palta, tomate y mayo</p>
        <span>$2990</span>
        </div>
        <div className="menu-item">
        <img src="seis.jpg" alt="Plato 2" />
        <h3>Choripan</h3>
        <p>Tu sandhwich de siempre pero con los ingredientes de una chorrillana</p>
        <span>$4990</span>
        </div>
        <div className="menu-item">
        <img src="tres.jpg" alt="Plato 3" />
        <h3>Chacarero</h3>
        <p>Tu chacarrero de siempre pero en pan de completo</p>
        <span>$4990</span>
        </div>
    </div>
    </div>
);
};

export default Menu;