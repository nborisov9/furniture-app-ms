import React from 'react'

export const Categories = ({ categoryNames, onClickCategories, activeCategories }) => {
  return (
    <div className="content-top__categories categories">
      <ul className="categoris__list">
        <li
          onClick={() => onClickCategories(null)}
          className={activeCategories === null ? 'categories__item active-category' : ''}>
          Все
        </li>
        {categoryNames &&
          categoryNames.map((name, index) => (
            <li
              key={`${index}_${name}`}
              onClick={() => onClickCategories(index)}
              className={activeCategories === index ? 'categories__item active-category' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}
