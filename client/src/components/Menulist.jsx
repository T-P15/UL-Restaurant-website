import React from 'react';

const MenuList = ({ menuItems }) => {
    return (
  <div>
    {menuItems.map(menuitem => (
      <div class="text-center p-5 " key={menuitem._id}>
        <h3 class="text-2xl text-red-800">{menuitem.name}</h3>
        <p class="p-2 text-xl">price: {menuitem.price}</p>
        <p class="text-xl italic">{menuitem.description}</p>
      </div>
    ))}
  </div>
 )
};

export default MenuList;