import React from 'react';
import s from './Sidebar.module.css';
function Sidebar() {
  return (
    <div className={s.sidebar__container}>
      <div className={s.sidebar__category}>
        <div className={s.category__title}>Бренды</div>
        <div className={s.category__input}>
          <input type="checkbox" id="topping" name="topping" value="Paneer" />
          Brand 1
        </div>
        <div className={s.category__input}>
          <input type="checkbox" id="topping" name="topping" value="Paneer" />
          Brand 2
        </div>
        <div className={s.category__input}>
          <input type="checkbox" id="topping" name="topping" value="Paneer" />
          Brand 3
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
