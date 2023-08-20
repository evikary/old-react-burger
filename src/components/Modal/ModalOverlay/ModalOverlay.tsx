import styles from '../ModalOverlay/ModalOverlay.module.css';

const ModalOverlay = (props) => {
  return <div className={styles.screen} onClick={props.onClick}></div>;
};

export default ModalOverlay;
