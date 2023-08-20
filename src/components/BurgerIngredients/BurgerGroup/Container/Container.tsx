import styles from '../Container/Container.module.css';

const Container = (props) => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className="text text_type_main-medium">{props.text}</h2>
      <div className={styles.container}>{props.children}</div>
    </section>
  );
};

export default Container;
