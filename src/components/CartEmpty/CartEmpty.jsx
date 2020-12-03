import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'

export const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__title">Корзина пустая</div>
      <div className="cart-empty__text">
        Скорее всего вы еще не выбрали товар. <br /> Для того, чтобы это исправить, перейдите на
        главную страницу <span>🙂</span>
      </div>
      <div className="cart-empty__image"></div>
      <Link to="/">
        <Button className="button-cart-emty">
          <i className="fas fa-arrow-left"></i>
          <span>Вернуться к покупкам</span>
        </Button>
      </Link>
    </div>
  )
}
