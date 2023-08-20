import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { data } from '../../utils/data';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import ProductDetails from './BurgerGroup/ProductDetails/ProductDetails';
import Container from './BurgerGroup/Container/Container';
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails';

const BurgerIngredients = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleClick = (item) => {
    setSelectedProduct(item);
    setIsVisible(true);
  };

  const [current, setCurrent] = useState('one');

  return (
    <section className={BurgerIngredientsStyles.wrapper}>
      {isVisible && selectedProduct && (
        <Modal onClose={() => setIsVisible(false)}>
          <IngredientsDetails {...selectedProduct} onClick={selectedProduct} />
        </Modal>
      )}
      <h1 className="mt-5 pt-5 mb-5 text text_type_main-large">Соберите бургер</h1>
      <nav className={BurgerIngredientsStyles.navPanel}>
        <aside style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </aside>
      </nav>
      <section className={BurgerIngredientsStyles.wrapperIngridients}>
        <Container text="Булки">
          {data
            .filter((item) => item.type === 'bun')
            .map((item) => (
              <ProductDetails key={item._id} {...item} onClick={() => handleClick(item)} />
            ))}
        </Container>
        <Container text="Соусы">
          {data
            .filter((item) => item.type === 'sauce')
            .map((item) => (
              <ProductDetails key={item._id} {...item} onClick={() => handleClick(item)} />
            ))}
        </Container>
        <Container text="Начинки">
          {data
            .filter((item) => item.type === 'main')
            .map((item) => (
              <ProductDetails key={item._id} {...item} onClick={() => handleClick(item)} />
            ))}
        </Container>
      </section>
    </section>
  );
};

export default BurgerIngredients;
