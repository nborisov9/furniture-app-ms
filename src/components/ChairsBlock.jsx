import React from 'react'

import { Button } from './Button'

export const ChairsBlock = ({ name }) => {
  // const availTypes = ['Цельные', 'Разборные']
  // const availSizes = ['128x128', '80x80', '100x100']

  return (
    <div className="content-product__item item-product">
      <div className="item-product__image">
        <img
          src="https://www.ikea.com/ru/ru/images/products/franklin-stul-barnyy-skladnoy-chernyy-chernyy__0874580_PE680502_S5.JPG?f=xxs"
          alt=""
        />
      </div>
      <div className="item-product__body">
        <div className="item-product__title">{name}</div>
        <div className="item-product__wrapper-selector">
          <div className="item-product__type type-product">
            <ul className="type-product__body">
              <li className="type-product__item active-selector">Цельные</li>
              <li className="type-product__item">Разборные</li>
            </ul>
          </div>
          <div className="item-product__size size-product">
            <ul className="size-product__body">
              <li className="size-product__item active-selector">
                128x128 <span>СМ</span>
              </li>
              <li className="size-product__item">
                80x80 <span>СМ</span>
              </li>
              <li className="size-product__item">
                100x100 <span>СМ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-product__bottom product-bottom">
          <div className="product-bottom__price">
            от <span>500 ₽</span>
          </div>
          <Button className="button-count" outline>
            <i className="fas fa-plus"></i>
            Добавить
            <span>3</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
