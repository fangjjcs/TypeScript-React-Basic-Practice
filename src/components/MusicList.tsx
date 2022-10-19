import React from 'react';

import MusicModel from '../models/MusicModel';
import MusicItem from './MusicItem';
import style from './Music.module.css'

const MusicList: React.FC<{items: MusicModel[]}> = (props) => {
  return (
    <ul className={style.list}>
        {props.items.map( (item) => <MusicItem key={item.id+item.name} name={item.name}></MusicItem>)}
    </ul>
  ) 
}

export default MusicList;