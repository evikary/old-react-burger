import AppHeaderStyles from './AppHeader.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  const Navigation = (props) => {
    return (
      <nav className={AppHeaderStyles.navHeader}>
        <>{props.img}</>
        <p className="pr-5 pl-2 text text_type_main-default">{props.text}</p>
      </nav>
    );
  };

  const Logotype = () => {
    return (
      <div className={AppHeaderStyles.logo}>
        <Logo />
      </div>
    );
  };

  return (
    <header className="pb-4 pt-4">
      <Navigation text="Конструктор" img={<BurgerIcon type="primary" />} />
      <Navigation text="Лента заказов" img={<ListIcon type="primary" />} />
      <Logotype />
      <Navigation text="Личный кабинет" img={<ProfileIcon type="primary" />} />
    </header>
  );
};

export default AppHeader;
