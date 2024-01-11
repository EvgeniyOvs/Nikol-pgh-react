import React from 'react';
import styles from './modal.module.scss';
export interface IModal   {
  active: boolean,
  setActive: (i:boolean) => void;
  modalImg: string,
  modalTitle: string,

}
export function Modal({active, setActive, modalImg, modalTitle} : IModal) {
  return (
      <div className={active ? styles.modal+ " " + styles.active : styles.modal} onClick={()=>setActive(false)}>
        <div className={active ? styles.modal__content + " " + styles.contentActive : styles.modal__content} onClick={e=>e.stopPropagation()}>
            <img src={modalImg} alt={modalTitle}/>
        </div>
      </div>
  );
}
