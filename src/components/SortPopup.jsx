import React from 'react'

export const SortPopup = ({ sortItems }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState(0)
  const activeLabel = sortItems[activeItem].name
  const sortRef = React.useRef()

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const hadnleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  const onSelectItem = (index) => {
    setActiveItem(index)
    setVisiblePopup(false)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', hadnleOutsideClick)
    return () => document.body.removeEventListener('click', hadnleOutsideClick)
  })

  return (
    <div ref={sortRef} className="content-top__sort sort">
      <div className="sort__title">
        <i
          className={
            visiblePopup ? 'arrow fas fa-sort-up arrow-active' : 'arrow fas fa-sort-up'
          }></i>
        Сортировка по: <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup popup-sort">
          <ul className="popup-sort__list active-popup">
            {sortItems &&
              sortItems.map(({ name, type }, index) => (
                <li
                  onClick={() => onSelectItem(index)}
                  key={`${index}_${type}`}
                  className={index === activeItem ? 'active-sort' : ''}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
