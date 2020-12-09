import React from 'react';
import PropTypes from 'prop-types';

export const ModalConfirm = ({ closeModalConfirm, onClickClearItems, questionName }) => {
  const modalWrapperRef = React.useRef();

  const outsideClickHandler = (event) => {
    if (event.target === modalWrapperRef.current) {
      closeModalConfirm();
    }
  };

  return (
    <div
      className="modal-confirm-wrapper"
      ref={modalWrapperRef}
      onClick={(event) => outsideClickHandler(event)}>
      <div className="modal-confirm">
        <div className="modal-confirm__header">
          <div className="modal-confirm__title">{questionName}</div>
          <i onClick={closeModalConfirm} className="modal-confirm__close far fa-times-circle"></i>
        </div>
        <div className="modal-confirm__response">
          <div onClick={onClickClearItems} className="modal-confirm_yes">
            Да
          </div>
          <div onClick={closeModalConfirm} className="modal-confirm_no">
            Нет
          </div>
        </div>
      </div>
    </div>
  );
};

ModalConfirm.propTypes = {
  questionName: PropTypes.string.isRequired,
  closeModalConfirm: PropTypes.func.isRequired,
  onClickClearItems: PropTypes.func.isRequired,
};
