import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../Ingridients/Ingridients.module.css';

const Ingridients = (props) => {
  const bun = props.ingridients.filter((item) => item.type === 'bun')[0];
  return (
    <>
      <section className={styles.container1}>
        {bun && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ConstructorElement
              extraClass="ml-10 mb-4"
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </section>
      <section className={styles.container2}>
        {props.ingridients
          .filter((item) => item.type !== 'bun')
          .map((item: any) => {
            return (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {item.type !== 'bun' && (
                  <div className={styles.dot}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      extraClass="mb-4 ml-2"
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                )}
              </div>
            );
          })}
      </section>
      <section>
        {bun && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ConstructorElement
              extraClass="ml-10 mb-4"
              type="bottom"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Ingridients;
