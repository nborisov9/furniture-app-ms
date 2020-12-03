import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, ChairsBlock, SortPopup, LoadingBlock } from '../components'
import { fetchChairs } from '../redux/actions/chairs'
import { setSortBy, setCategory } from '../redux/actions/filters'
import { addChairsToCart } from '../redux/actions/cart'

const categoryNames = ['Кресла', 'Барные', 'Табуреты', 'Для кафе', 'Для кухни']
const sortItems = [
  { name: 'по рейтингу', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'asc' },
  { name: 'алфавиту', type: 'alphabet', order: 'asc' },
]

export const Home = () => {
  const dispatch = useDispatch()

  const items = useSelector(({ chairs }) => chairs.items)
  const isLoaded = useSelector(({ chairs }) => chairs.isLoaded)
  const chairsCount = useSelector(({ cart }) => cart.items)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchChairs(category, sortBy))
  }, [category, sortBy, dispatch])

  const onSelectsetCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    },
    [dispatch],
  )

  const onSelectSort = React.useCallback(
    (type) => {
      dispatch(setSortBy(type))
    },
    [dispatch],
  )

  const handleChairToCart = (obj) => {
    dispatch(addChairsToCart(obj))
  }

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
          {isLoaded
            ? items &&
              items.map((obj) => (
                <ChairsBlock
                  onClickAddChair={handleChairToCart}
                  addChairsCount={chairsCount[obj.id] && chairsCount[obj.id].items.length}
                  key={`${obj.id}_${obj.name}`}
                  {...obj}
                />
              ))
            : Array(24)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  )
}
