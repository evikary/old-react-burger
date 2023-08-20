import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import { useEffect } from 'react';

const modalRoot = document.getElementById('react-modal');

const Modal = (props: any) => {
  const { children, onClose } = props;

  useEffect(() => {
    function handleEsc(e: any) {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={ModalStyles.modal}>
        <div className={ModalStyles.btnClose}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </>,
    modalRoot!
  );
};

export default Modal;
