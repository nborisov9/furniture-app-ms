import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(({ categoryNames, onClickCategories, activeCategories }) => {
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
  );
});

Categories.propTypes = {
  onClickCategories: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
