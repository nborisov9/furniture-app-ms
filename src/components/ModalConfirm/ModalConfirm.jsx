import React from 'react'

export const ModalConfirm = ({ closeModalConfirm, onClickClearItems, question }) => {
  return (
    <div className="modal-confirm-wrapper">
      <div className="modal-confirm">
        <div className="modal-confirm__header">
          <div className="modal-confirm__title">{question}</div>
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
  )
}
