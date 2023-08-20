import checkModal from '../../images/checkModal.svg';

const OrderDetails = () => {
  return (
    <>
      <h1 className="text text_type_digits-large mt-30 mb-8">034546</h1>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={checkModal} alt="check" className="mt-15 mb-15" />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
