import React from 'react';
import styles from './layout.module.scss';
import {Header} from  "../../components";
import {Outlet} from "react-router-dom";
import {Hr} from "../Hr";
import {About} from "../About";
import {Portfolio} from "../Portfolio";
import {Footer} from "../Footer";
import {Services} from "../Services";
import {PulseButton} from "../PulseButton";


export function Layout() {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);
    const ref5 = React.useRef(null);
    const ref6 = React.useRef(null);
    const ref7 = React.useRef(null);
    const ref8 = React.useRef(null);
    const ref9 = React.useRef(null);
    const ref10 = React.useRef(null);
    const ref11 = React.useRef(null);
    if(!ref1) return null;
    if(!ref2) return null;
    if(!ref3) return null;
    if(!ref4) return null;
    if(!ref5) return null;
    if(!ref6) return null;
    if(!ref7) return null;
    if(!ref8) return null;
    if(!ref9) return null;
    if(!ref10) return null;
    if(!ref11) return null;
  return (
    <div className={styles.layout}>
      <Header
        artRef1={ref1}
        artRef2={ref2}
        artRef3={ref3}
        artRef4={ref4}
        artRef5={ref5}
        artRef6={ref6}
        artRef7={ref7}
        artRef8={ref8}
        artRef9={ref9}
        artRef10={ref10}
        artRef11={ref11}
      />
        <Hr/>
        <PulseButton/>
      <main>
          <About
              artRef1={ref1}
          />
          <Portfolio
              artRef2={ref2}
              artRef3={ref3}
              artRef4={ref4}
              artRef5={ref5}
              artRef6={ref6}
          />
          <Outlet/>
          <Services
              artRef7={ref7}
              artRef8={ref8}
              artRef9={ref9}
              artRef10={ref10}
          />
      </main>
        <Footer
            artRef11={ref11}
        />
    </div>
  );
}
