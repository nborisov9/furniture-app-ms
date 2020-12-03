import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { plusCartItem, minusCartItem, removeCartItem } from '../../redux/actions/cart'
import { ModalConfirm } from '../ModalConfirm'

export const CartItems = ({ id, name, type, size, image, totalCountItem, totalPriceItem }) => {
  const dispatch = useDispatch()
  const [visibleModal, setVisibleModal] = React.useState(false)

  const closeModalConfirm = () => {
    setVisibleModal(false)
  }

  const openModalConfirm = () => {
    setVisibleModal(true)
  }

  const onClickClearItem = () => {
    dispatch(removeCartItem(id))
    setVisibleModal(false)
  }

  const plusItemHandler = () => {
    dispatch(plusCartItem(id))
  }

  const minusItemHandler = () => {
    dispatch(minusCartItem(id))
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

      <div className="item-cart__count">
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
      <div onClick={openModalConfirm} className="item-cart__close btn-cart-hover">
        <i className="far fa-times-circle"></i>
      </div>
      {visibleModal && (
        <ModalConfirm
          questionName="Вы действительно хотите удалить данный товар?"
          closeModalConfirm={closeModalConfirm}
          onClickClearItems={onClickClearItem}
        />
      )}
    </div>
  )
}

CartItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  totalCountItem: PropTypes.number.isRequired,
}
