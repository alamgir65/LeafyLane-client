import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className='space-y-2 mt-5'>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className='btn w-full '>{category.name}</NavLink>)
            }
        </div>
    );
};

export default Categories;