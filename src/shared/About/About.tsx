import React from 'react';
import styles from './about.module.scss';
import stylesGlobal from '../../main.global.scss'
import {Ecolor, Text} from "../Text";
import {MyRef} from "../Header";
export interface MyRefAbout {
    artRef1: any,

}
export function About({artRef1 }:MyRefAbout) {
  return (
      <section ref={artRef1} className={styles.about}>
        <div className={stylesGlobal.container}>
          <div className={styles.about__container}>
              <div className={stylesGlobal.sectionTitle}>
                  <Text As="h2" size={28} mobileSize={24} color={Ecolor.white} weight={700}>
                    Обо мне
                  </Text>
             </div>
              <div className={styles.about__descr}>
                  <Text As="p" size={16} color={Ecolor.white} weight={400}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex obcaecati quibusdam voluptate quas
                      laborum hic tempore iste molestiae deserunt magni magnam, consectetur accusamus quidem nemo dignissimos?
                      Alias, atque quod?
                  </Text>
              </div>
          </div>
        </div>
      </section>
  );
}
