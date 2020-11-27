import React from 'react'

export const CartItems = () => {
  return (
    <div className="cart__item item-cart">
      <div className="item-cart__info">
        <img
          src="https://www.ikea.com/ru/ru/images/products/norrake…oker-skamya-bereza__0682550_PE720526_S5.JPG?f=xxs"
          alt=""
        />
        <div className="item-cart__body">
          <div className="item-cart__name">LEIFARNE</div>
          <div className="item-cart__details">
            <div className="item-cart__type">
              тип: <span>цельный</span>
            </div>
            <div className="item-cart__size">
              размер: <span>100х100 см</span>
            </div>
          </div>
        </div>
      </div>

      <div className="item-cart__arrow">
        <i className="fas fa-minus btn-cart-hover"></i>
        <span>3</span>
        <i className="fas fa-plus btn-cart-hover"></i>
      </div>
      <div className="item-cart__price">
        <span>
          2000
          <i className="fas fa-ruble-sign"></i>
        </span>
      </div>
      <div className="item-cart__close btn-cart-hover">
        <i className="far fa-times-circle"></i>
      </div>
    </div>
  )
}
