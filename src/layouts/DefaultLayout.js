import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import style from './defaultlayout.module.scss';

function DefaultLayout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.content}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
