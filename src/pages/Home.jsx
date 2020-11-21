import React from 'react'

import { Categories, ChairsBlock, SortPopup } from '../components'

const categoryNames = ['Кресла', 'Барные', 'Табуреты', 'Для кафе', 'Для кухни']
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

const items = [
  'GLENN',
  'STIG ',
  'DALFRED ',
  'INGOLF ',
  'BERNHARD',
  'JANINGE',
  'LEIFARNE',
  'NORRAKER ',
]

export const Home = () => {
  return (
    <div className="container">
      <div className="content__title">Стулья</div>
      <div className="content__top content-top">
        <Categories categoryNames={categoryNames} />
        <SortPopup sortItems={sortItems} />
      </div>
      <div className="content__prodcut content-product">
        <div className="content-product__row">
          {items && items.map((item, i) => <ChairsBlock key={`${i}_${item}`} name={item} />)}
        </div>
      </div>
    </div>
  )
}
