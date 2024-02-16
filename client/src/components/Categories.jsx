import React from 'react'

const Categories = ({categories, onSelectCategory}) => {
    return ( 
        <div>
        <ul role="list" className="space-y-4 border-b border-red-600 pb-6 text-sm font-medium text-gray-900">
        {categories.map((category) => (
          <li key={category._id} onClick = {() => onSelectCategory(category._id)} >
            {category.name}
          </li>
        ))}
      </ul>
      </div>
    )
};


export default Categories