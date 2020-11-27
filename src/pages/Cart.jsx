import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from '../redux/actions/cart'
import { Button } from '../components'
import { CartItems } from '../components'

export const Cart = () => {
  const dispatch = useDispatch()
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart)

  const addedChairs = Object.keys(items).map((id) => items[id].items[0])

  const onClickClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="wrapper-cart">
      <div className="cart">
        <div className="cart__top">
          <div className="cart__title">
            <i className="fas fa-cart-arrow-down"></i>
            Корзина
          </div>
          <div onClick={onClickClearCart} className="cart__clear btn-cart-hover">
            <i className="far fa-trash-alt"></i>
            очистить корзину
          </div>
        </div>

        {addedChairs &&
          addedChairs.map(({ name, type, size, id, imageUrl }) => (
            <CartItems
              totalCountItem={items[id].items.length}
              totalPriceItem={items[id].totalPrice}
              image={imageUrl}
              name={name}
              type={type}
              size={size}
              key={id}
              id={id}
            />
          ))}

        <div className="cart__result result-cart">
          <div className="result-cart__length">
            Всего стульев: <span>{totalCount}</span> <i>шт.</i>
          </div>
          <div className="result-cart__total">
            Сумма заказа:
            <span>
              {totalPrice}
              <i className="fas fa-ruble-sign"></i>
            </span>
          </div>
        </div>
        <div className="cart__bottom">
          <Link to="/">
            <Button className="btn-exit btn-cart-hover">
              <i className="fas fa-angle-left"></i>
              Вeрнуться назад
            </Button>
          </Link>
          <Button className="button-cart button btn-pay">
            <span>Оплатить сейчас</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
