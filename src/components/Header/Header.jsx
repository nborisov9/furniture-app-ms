import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button } from '../Button'
import line from '../../assets/img/header/vertline.png'

export const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart)

  return (
    <header>
      <div className="header">
        <div className="header__top top-header">
          <div className="top-header__wrapper">
            <div className="top-header__list">
              <li className="top-header__link">Главная</li>
              <li className="top-header__link">О магазине</li>
              <li className="top-header__link">О нас</li>
              <li className="top-header__link">Контакты</li>
              <li className="top-header__link">Отзывы</li>
            </div>
            <div className="top-header__social">
              <a href="/" className="social-mail">
                <i className="far fa-envelope"></i>
                nik-borisov-1999@mail.ru
              </a>
              <a href="/" className="social-phone">
                <i className="fas fa-phone"></i>
              </a>
              <a href="/" className="social-telegram">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="/" className="social-instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="header__botom bottom-header">
          <div className="bottom-header__wrapper">
            <div className="header-logo">
              <Link to="/">
                <div className="bottom-header__logo">Furniture Store</div>
              </Link>
              <div className="header-vertical-line"></div>
              <div className="header-qoute">лучшая мебель во вселенной</div>
            </div>
            <div className="bottom-header__cart">
              <Link to="/cart">
                <Button className="button-cart button">
                  <div className="button-price-icon">
                    <span>{totalPrice}</span>
                    <i className="fas fa-ruble-sign"></i>
                  </div>
                  <img src={line} alt="" />
                  <div className="button-cart-icon">
                    <i className="fas fa-shopping-basket"></i>
                    <span>{totalCount}</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
