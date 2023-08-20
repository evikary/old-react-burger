import Price from '../Price/Price';
import styles from '../ProductDetails/ProductDetails.module.css';

const ProductDetails = (props) => {
  return (
    <div className={styles.productDet} onClick={props.onClick}>
      <img alt={props.name} src={props.image} />
      <Price price={props.price} />
      <p className={`${styles.titleProduct} text text_type_main-default`}>{props.name}</p>
    </div>
  );
};

export default ProductDetails;
