import React from 'react'

import { Button } from '../components'
import { CartItems } from '../components'

export const Cart = () => {
  return (
    <div className="wrapper-cart">
      <div className="cart">
        <div className="cart__top">
          <div className="cart__title">
            <i className="fas fa-cart-arrow-down"></i>
            Корзина
          </div>
          <div className="cart__clear btn-cart-hover">
            <i className="far fa-trash-alt"></i>
            очистить корзину
          </div>
        </div>

        <CartItems />
        <CartItems />

        <div className="cart__result result-cart">
          <div className="result-cart__length">
            Всего стульев: <span>3</span> <i>шт.</i>
          </div>
          <div className="result-cart__total">
            Сумма заказа:
            <span>
              3000
              <i className="fas fa-ruble-sign"></i>
            </span>
          </div>
        </div>
        <div className="cart__bottom">
          <Button className="btn-exit btn-cart-hover">
            <i className="fas fa-angle-left"></i>
            Вeрнуться назад
          </Button>
          <Button className="button-cart button btn-pay">
            <span>Оплатить сейчас</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
