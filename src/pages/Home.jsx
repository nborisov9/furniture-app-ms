import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, ChairsBlock, SortPopup } from '../components'
import { fetchChairs } from '../redux/actions/chairs'
import { setSortBy, setCategory } from '../redux/actions/filters'

const categoryNames = ['Кресла', 'Барные', 'Табуреты', 'Для кафе', 'Для кухни']
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'asc' },
  { name: 'алфавиту', type: 'alphabet', order: 'asc' },
]

export const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ chairs }) => chairs.items)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchChairs(category, sortBy))
  }, [category, sortBy, dispatch])

  const onSelectsetCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__title">Стулья</div>
      <div className="content__top content-top">
        <Categories
          activeCategories={category}
          onClickCategories={onSelectsetCategory}
          categoryNames={categoryNames}
        />
        <SortPopup onClickSortType={onSelectSort} sortItems={sortItems} />
      </div>
      <div className="content__prodcut content-product">
        <div className="content-product__row">
          {items && items.map((obj) => <ChairsBlock key={`${obj.id}_${obj.name}`} {...obj} />)}
        </div>
      </div>
    </div>
  )
}
