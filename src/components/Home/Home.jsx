import React, { useEffect } from 'react';
import api from './../../common/api/movieApi';
import style from './Home.module.scss';

function Home() {
  useEffect(async () => {
    const { data } = await api.get('tt3896198');
    console.log(data);
  }, []);

  return (
    <div className={style.home}>
      <h1>Hello</h1>
    </div>
  );
}

export default Home;
