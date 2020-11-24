import React from 'react'

import { Button } from './Button'

export const ChairsBlock = ({ name, imageUrl, price, id, onClickAddChair }) => {
  const availTypes = ['цельные', 'разборные']
  const availSizes = ['128x128', '80x80', '100x100']

  const onAddChairToCart = () => {
    const obj = {
      name,
      imageUrl,
      price,
      id,
    }
    onClickAddChair(obj)
  }

  return (
    <div className="content-product__item item-product">
      <div className="item-product__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item-product__body">
        <div className="item-product__title">{name}</div>
        <div className="item-product__wrapper-selector">
          <div className="item-product__type type-product">
            <ul className="type-product__body">
              {availTypes.map((size, index) => (
                <li key={`${size}_${index}`} className="type-product__item active-selector">
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-product__size size-product">
            <ul className="size-product__body">
              {availSizes.map((type, index) => (
                <li key={`${index}_${type}`} className="size-product__item active-selector">
                  {type} <span>СМ</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item-product__bottom product-bottom">
          <div className="product-bottom__price">
            от <span>{price} ₽</span>
          </div>
          <Button onClick={onAddChairToCart} className="button-count" outline>
            <i className="fas fa-plus"></i>
            Добавить
            <span>3</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
