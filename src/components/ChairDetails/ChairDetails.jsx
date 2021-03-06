import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Home } from '../../pages';

export const ChairDetails = ({ match }) => {
  const paramsId = match.params.id;
  const { items } = useSelector(({ chairs }) => chairs);
  const currentChair = items.find(({ id }) => id === Number(paramsId));
  const history = useHistory();

  const [descripVisible, setDescripVisible] = React.useState(false);
  const [materialVisible, setMaterialVisible] = React.useState(false);

  const toggleDescriptionHandler = () => {
    setDescripVisible((prevState) => !prevState);
  };

  const toggleMaterialHandler = () => {
    setMaterialVisible((prevState) => !prevState);
  };

  if (currentChair) {
    return (
      <div className="container">
        <div className="chair-details">
          <div className="chair-details__row">
            <div className="chair-details__column">
              <div className="chair-details__image">
                <img src={currentChair.imageUrl} alt="" />
              </div>
              <Link to="/">
                <Button className="btn-exit btn-cart-hover btn-chair-details">
                  <i className="fas fa-arrow-left"></i>
                  Вeрнуться назад
                </Button>
              </Link>
            </div>
            <div className="chair-details__column">
              <div className="chair-details__body chair-details-body">
                <div className="chair-details-body__name">{currentChair.name}</div>
                <div className="chair-details-body__price">
                  Цена:<span>{currentChair.price}</span>
                  <i className="fas fa-ruble-sign"></i>
                </div>
                <div className="chair-details-body__description">
                  <div
                    className="chair-description-top"
                    onClick={toggleDescriptionHandler}>
                    <i
                      className={
                        descripVisible
                          ? 'arrow fas fa-sort-up'
                          : 'arrow fas fa-sort-down arrow-down'
                      }></i>
                    Подробнее о товаре
                  </div>
                  {descripVisible && (
                    <div className="chair-description-bottom">
                      {currentChair.description}
                    </div>
                  )}
                </div>
                <div className="chair-details-body__material">
                  <div className="chair-material-top" onClick={toggleMaterialHandler}>
                    <i
                      className={
                        materialVisible
                          ? 'arrow fas fa-sort-up'
                          : 'arrow fas fa-sort-down arrow-down'
                      }></i>
                    Материал
                  </div>
                  {materialVisible && (
                    <div className="chair-material-bottom">{currentChair.material}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (Number(paramsId) > 23) {
      history.push('/');
    }
    return <Home />;
  }
};

ChairDetails.propTypes = {
  match: PropTypes.object,
};
