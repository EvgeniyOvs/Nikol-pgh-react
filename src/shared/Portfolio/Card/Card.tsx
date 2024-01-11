import React, {useState} from 'react';
import styles from './card.module.scss';
import {Modal} from "./Modal";

interface ICardProps{
    id: number,
    mainImage: string,
    title: string,
}
export function Card({id, mainImage, title} : ICardProps) {
    const [modalActive, setModalActive] = useState(false)
  return (
      <li className={styles.item}>
        <article className={styles.item__photo}>
          <button className={styles.item__btn} onClick={()=>setModalActive(true)}>
          </button>
          <div className={styles.item__image}>
            <img src={mainImage} alt={title}/>
          </div>
        </article>
          <Modal
            active={modalActive}
            setActive={setModalActive}
            modalImg={mainImage}
            modalTitle={title}
          />
      </li>
  );
}
