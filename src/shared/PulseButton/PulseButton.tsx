import React from 'react';
import styles from './pulsebutton.module.scss';
import {Ecolor, Text} from "../Text";

export function PulseButton() {
  return (
      <div className={styles.pulseButton}>
        <span className={styles.pulseButton__rings}></span>
        <span className={styles.pulseButton__rings}></span>
        <span className={styles.pulseButton__rings}></span>
        <span className={styles.pulseButton__text}>
          <span>
          <a className={styles.pulseButton__link}
             href="https://api.whatsapp.com/send?phone=79885802740">
            <Text size={16} color={Ecolor.white} weight={600}>
                    Записаться на съемку
            </Text>
          </a>
          </span>
      </span>
      </div>
  );
}
