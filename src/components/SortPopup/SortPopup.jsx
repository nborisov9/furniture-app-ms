import React from 'react';
import PropTypes from 'prop-types';

export const SortPopup = React.memo(({ sortItems, onClickSortType }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(sortItems[0].name);
  const activeLabel = activeItem;
  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const hadnleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (obj) => {
    setActiveItem(obj.name);
    onClickSortType(obj);
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', hadnleOutsideClick);
    return () => document.body.removeEventListener('click', hadnleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="content-top__sort sort">
      <div className="sort__title">
        <i
          className={
            visiblePopup ? 'arrow fas fa-sort-up' : 'arrow fas fa-sort-up arrow-active'
          }></i>
        Сортировать по: <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup popup-sort">
          <ul className="popup-sort__list active-popup">
            {sortItems &&
              sortItems.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj)}
                  key={`${index}_${obj.type}`}
                  className={obj.name === activeItem ? 'active-sort' : ''}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  onClickSortType: PropTypes.func.isRequired,
  sortItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
