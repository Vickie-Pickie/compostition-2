import MenuItem from "./MenuItem";

/**
 * Компонент отвечает за отрисовку всего списка меню
 */
function MenuList() {
  const menuList = [
    {
      title: "",
      link: "",
    },
  ];
  return (
    <ul>
      {
        menuList.map((menu, index) =>
          <MenuItem key={index} title={menu.title} link={menu.link} />)
      }
    </ul>
  );
}

export default MenuList;
