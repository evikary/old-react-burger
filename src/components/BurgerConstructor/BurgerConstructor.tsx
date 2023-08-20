import BurgerConstructorStyles from './BurgerConstructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import Ingridients from './Ingridients/Ingridients';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';

const BurgerConstructor = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className={BurgerConstructorStyles.wrapper}>
      {isVisible && (
        <Modal onClose={() => setIsVisible(false)}>
          <OrderDetails />
        </Modal>
      )}
      <Ingridients {...props} />
      <section className={` mt-5 mr-4 ml-4 ${BurgerConstructorStyles.btn} `}>
        <div className={BurgerConstructorStyles.price}>
          <p className="text text_type_digits-medium pr-2">5429</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={() => setIsVisible(true)} htmlType="button" type="primary" size="large" extraClass="ml-4">
          Оформить заказ
        </Button>
      </section>
    </section>
  );
};

export default BurgerConstructor;
