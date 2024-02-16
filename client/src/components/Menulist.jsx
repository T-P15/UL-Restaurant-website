import React from 'react';

const MenuList = ({ menuItems }) => {
    return (
  <div>
    {menuItems.map(menuitem => (
      <div key={menuitem._id}>
        <h3>{menuitem.name}</h3>
        <p>price: {menuitem.price}</p>
        <p>{menuitem.description}</p>
      </div>
    ))}
  </div>
 )
};

export default MenuList;