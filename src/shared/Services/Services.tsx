import React from 'react';
import styles from './services.module.scss';
export interface MyRefServices {
  artRef7: any,
  artRef8: any,
  artRef9: any,
  artRef10: any,

}

export function Services({ artRef7, artRef8, artRef9, artRef10}:MyRefServices) {
  return (
      <section ref={artRef7} className={styles.services}>
        <div className={styles.services__container}>
          <h2 className={styles.sectionTitle}>Услуги</h2>
          <h3 ref={artRef8}  className={styles.servicesIndividual}>Индивидуальные съемки</h3>
          <div className={styles.services__wrapper}>
            <article className={styles.services__card}>
              <h4 className={styles.services__subTitle}>Комфорт</h4>
              <ul className={styles.services__list}>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
              </ul>
            </article>
            <article  className={styles.services__card}>
              <h4 className={styles.services__subTitle}>Макси</h4>
              <ul className={styles.services__list}>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
              </ul>
            </article>
          </div>
          <h3 ref={artRef9} className={styles.servicesWedding}>Свадебные</h3>
          <div className={styles.services__wrapper}>
            <article className={styles.services__card}>
              <h4 className={styles.services__subTitle}>Мини</h4>
              <ul className={styles.services__list}>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
              </ul>
            </article>
            <article className={styles.services__card}>
              <h4 className={styles.services__subTitle}>Комфорт</h4>
              <ul className={styles.services__list}>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
              </ul>
            </article>
            <article  className={styles.services__card}>
              <h4 className={styles.services__subTitle}>Макси</h4>
              <ul className={styles.services__list}>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
                <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
              </ul>
            </article>
          </div>
          <h3 ref={artRef10} className={styles.servicesDop}>Дополнительная информация</h3>
          <ul className={styles.services__list}>
            <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
            <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
            <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
            <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
            <li className={styles.services__lisItem}>Lorem ipsum dolor</li>
          </ul>
        </div>
      </section>
  );
}
