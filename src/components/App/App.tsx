import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngridients from '../BurgerIngredients/BurgerIngredients';
import { API_INGRIDIENTS_URL } from '../../utils/constanse';
import Loader from '../Loader/Loader';

function App() {
  const [stateData, setStateData] = useState({
    isLoading: true,
    hasError: false,
    ingridients: [],
  });

  useEffect(() => {
    const getIngridients = async () => {
      try {
        const response = await fetch(API_INGRIDIENTS_URL);
        if (response.status !== 200) {
          throw new Error('Ошибка!');
        } else {
          const dataIngridients = await response.json();
          setStateData({
            isLoading: false,
            hasError: false,
            ingridients: dataIngridients.data,
          });
        }
      } catch (error) {
        setStateData({
          isLoading: false,
          hasError: true,
          ingridients: [],
        });
      }
    };
    getIngridients();
  }, []);

  const { isLoading, hasError, ingridients } = stateData;

  return (
    <>
      <AppHeader />
      {isLoading && <Loader />}
      {hasError && <h1 className="text text_type_digits-default">Произошла ошибка. Попробуйте еще раз</h1>}
      {!isLoading && !hasError && (
        <main className={styles.sectionBurger}>
          <BurgerIngridients ingridients={ingridients} />
          <BurgerConstructor ingridients={ingridients} />
        </main>
      )}
    </>
  );
}

export default App;
