import React from 'react'
import { useDispatch } from 'react-redux'

import { plusCartItem, minusCartItem, removeCartItem } from '../../redux/actions/cart'

export const CartItems = ({ id, name, type, size, image, totalCountItem, totalPriceItem }) => {
  const dispatch = useDispatch()

  const plusItemHandler = () => {
    dispatch(plusCartItem(id))
  }

  const minusItemHandler = () => {
    dispatch(minusCartItem(id))
  }

  const removeItemHandler = () => {
    dispatch(removeCartItem(id))
  }

  return (
    <div className="cart__item item-cart">
      <div className="item-cart__info">
        <img src={image} alt="" />
        <div className="item-cart__body">
          <div className="item-cart__name">{name}</div>
          <div className="item-cart__details">
            <div className="item-cart__type">
              тип: <span>{type}</span>
            </div>
            <div className="item-cart__size">
              размер: <span>{size} см</span>
            </div>
          </div>
        </div>
      </div>

      <div className="item-cart__arrow">
        <i onClick={minusItemHandler} className="fas fa-minus btn-cart-hover"></i>
        <span>{totalCountItem}</span>
        <i onClick={plusItemHandler} className="fas fa-plus btn-cart-hover"></i>
      </div>
      <div className="item-cart__price">
        <span>
          {totalPriceItem}
          <i className="fas fa-ruble-sign"></i>
        </span>
      </div>
      <div onClick={removeItemHandler} className="item-cart__close btn-cart-hover">
        <i className="far fa-times-circle"></i>
      </div>
    </div>
  )
}
