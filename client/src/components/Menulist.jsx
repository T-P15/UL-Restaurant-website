import React from 'react';

const MenuList = ({ menuItems }) => {
    return (
  <div>
    {menuItems.map(menuitem => (
      <div class="text-center p-5 " key={menuitem._id}>
        <h3 class="text-2xl text-red-800">{menuitem.name}</h3>
        <p class="p-2 text-xl">price: {menuitem.price}</p>
        <p class="text-xl italic p-2">{menuitem.description}</p>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">
  Order Now 
</button>
      </div>
    ))}
  </div>
 )
};

export default MenuList;