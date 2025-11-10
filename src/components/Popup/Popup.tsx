import type { ReactNode } from 'react';
import Modal from 'react-modal';
import './popup.scss';

Modal.setAppElement('#root');

interface ICustomModal {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

function Popup({ isOpen, onRequestClose, children }: ICustomModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      overlayClassName={{
        base: 'modal-overlay',
        afterOpen: 'modal-overlay-open',
        beforeClose: 'modal-overlay-close',
      }}
      className={{
        base: 'modal-content',
        afterOpen: 'modal-content-open',
        beforeClose: 'modal-content-close',
      }}
    >
      <div className="popup">
        <button
          className="popup-close-button"
          onClick={onRequestClose}
          aria-label="close popup"
        >
          ✕
        </button>
        <div className="popup-content">{children}</div>
      </div>
    </Modal>
  );
}

export default Popup;
