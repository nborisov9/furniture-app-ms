import React from 'react'

export const Categories = ({ categoryNames }) => {
  const [activeCategory, setAcriveCategory] = React.useState(null)

  const selectCategory = (index) => {
    setAcriveCategory(index)
  }

  return (
    <div className="content-top__categories categories">
      <ul className="categoris__list">
        <li
          onClick={() => selectCategory(null)}
          className={activeCategory === null ? 'categories__item active-category' : ''}>
          Все
        </li>
        {categoryNames &&
          categoryNames.map((name, index) => (
            <li
              key={`${index}_${name}`}
              onClick={() => selectCategory(index)}
              className={activeCategory === index ? 'categories__item active-category' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}
