import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../Price/Price.module.css';

const Price = (props) => {
  return (
    <div className={`${styles.price} mb-2 mt-2`}>
      <span className="mr-2 text text_type_digits-default">{props.price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default Price;
