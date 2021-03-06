import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../Button';

export const ChairsBlock = ({
  name,
  imageUrl,
  price,
  id,
  types,
  sizes,
  onClickAddChair,
  addChairsCount,
  onClickGetChairId,
}) => {
  const availTypes = ['цельный', 'разборный'];
  const availSizes = ['128x128', '80x80', '100x100'];

  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activeType, setActiveType] = React.useState(types[0]);

  const onAddChairToCart = () => {
    const chairData = {
      id,
      name,
      imageUrl,
      price,
      size: availSizes[activeSize],
      type: availTypes[activeType],
    };
    onClickAddChair(chairData);
  };

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="content-product__item item-product">
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => onClickGetChairId(id)}
        className="item-product__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item-product__body">
        <div className="item-product__title">{name}</div>
        <div className="item-product__wrapper-selector">
          <div className="item-product__type type-product">
            <ul className="type-product__body">
              {availTypes.map((type, index) => (
                <li
                  className={classNames('type-product__item', {
                    'active-selector': activeType === index,
                    'disable-selector': !types.includes(index),
                  })}
                  onClick={() => onSelectType(index)}
                  key={`${type}_${index}`}>
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-product__size size-product">
            <ul className="size-product__body">
              {availSizes.map((size, index) => (
                <li
                  className={classNames('size-product__item', {
                    'active-selector': activeSize === index,
                    'disable-selector': !sizes.includes(index),
                  })}
                  onClick={() => onSelectSize(index)}
                  key={`${index}_${size}`}>
                  {size} <span>см</span>
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
            <i className="fas fa-cart-plus"></i>
            Добавить
            {addChairsCount && <span>{addChairsCount}</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

ChairsBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
