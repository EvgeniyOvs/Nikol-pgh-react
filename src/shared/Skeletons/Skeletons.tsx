import React from 'react';
import styles from './skeletons.module.scss';
import ContentLoader from "react-content-loader";

export function Skeletons() {
  return (
      <div className={styles.skeletons}>

              <ContentLoader
                  className={styles.skeletons__mobile}
                  speed={2}
                  width={256}
                  height={300}
                  viewBox="0 0 256 300"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
              >
                  <rect x="16" y="0" rx="2" ry="2" width="236" height="280" />
              </ContentLoader>
      </div>
  );
}
