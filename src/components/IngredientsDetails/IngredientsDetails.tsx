import styles from '../IngredientsDetails/IngredientsDetails.module.css';

const IngredientsDetails = (props) => {
  return (
    <>
      <h1 className="text text_type_main-large mt-10">Детали ингредиента</h1>
      <img src={props?.image_large} alt={props?.name} />
      <p className="text text_type_main-medium mt-4">{props?.name}</p>
      <div className={`${styles.block} mt-4 mb-15`}>
        <div className={`${styles.miniBlock} mr-5`}>
          <p className="text text_type_main-default mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default">{props?.calories}</p>
        </div>
        <div className={`${styles.miniBlock} mr-5`}>
          <p className="text text_type_main-default mb-2">Белки, г</p>
          <p className="text text_type_digits-default">{props?.proteins}</p>
        </div>
        <div className={`${styles.miniBlock} mr-5`}>
          <p className="text text_type_main-default mb-2">Жиры, г</p>
          <p className="text text_type_digits-default">{props?.fat}</p>
        </div>
        <div className={`${styles.miniBlock} mr-5`}>
          <p className="text text_type_main-default mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default">{props?.carbohydrates}</p>
        </div>
      </div>
    </>
  );
};

export default IngredientsDetails;
