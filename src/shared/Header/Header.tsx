import React, {useState} from 'react';
import styles from './header.module.scss';
import stylesGlobal from '../../main.global.scss'
import {Ecolor, Text} from "../../components";
import gsap from "gsap"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import Vars = ScrollTrigger.Vars;


export interface MyRef {
  artRef1: any,
  artRef2: any,
  artRef3: any,
  artRef4: any,
  artRef5: any,
  artRef6: any,
  artRef7: any,
  artRef8: any,
  artRef9: any,
  artRef10: any,
  artRef11: any,
}
export function Header({artRef1, artRef2, artRef3, artRef4, artRef5, artRef6, artRef7, artRef8, artRef9, artRef10, artRef11}:MyRef) {
  gsap.registerPlugin(ScrollToPlugin)

  const scrollTo = (target: number | string | Element | Function | ScrollToPlugin.Vars) =>{
    gsap.to(window, {duration:1, scrollTo:target})
  }

  const [isMenuOpen, toggleMenu] = useState(false);
  const [isSubPortMenuOpen, toggleSubMenuPort] = useState(false);
  const [isSubServMenuOpen, toggleSubMenuServ] = useState(false);

  function toggleSubPortMenuMode() {
    setTimeout(() => {
      toggleSubMenuPort(!isSubPortMenuOpen);
    }, 300);

  }
  const clickHandlerSubPort = () => {
    toggleSubPortMenuMode();
  };
  function toggleSubServMenuMode() {
    setTimeout(() => {
      toggleSubMenuServ(!isSubServMenuOpen);
    }, 300);

  }
  const clickHandlerSubServ = () => {
    toggleSubServMenuMode();
  };
  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }
  const clickHandler = () => {
    toggleMenuMode();
  };
  return (
      <header className={styles.header}>
        <span className={stylesGlobal.visuallyHidden}>
          <Text As="h1" size={28} color={Ecolor.black} weight={700}>
            Фотограф Николь Пинхасова
          </Text>
        </span>
        <div className={styles.header__container}>
        <button onClick={clickHandler} className={isMenuOpen ? styles.burger + " " + styles.burger__active : styles.burger}>
          <span className={styles.burger__line}></span>
        </button>
          <a href="index.html" className={styles.logo} aria-label="логотип">
            <Text As="h2" size={28} color={Ecolor.white} weight={700}>
              Николь Пинхасова логотип
            </Text>
          </a>
        <nav className={isMenuOpen ? styles.nav + " " + styles.nav__active : styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <button onClick={()=>scrollTo(artRef1.current)}   className={styles.nav__link} aria-label="Обо мне">
                <Text size={24} color={Ecolor.white} weight={600}>
                  Обо мне
                </Text>
              </button>
            </li>
            <li className={styles.nav__item}>
              <button onClick={()=>scrollTo(artRef2.current)} className={styles.nav__link} aria-label="Портфолио">
                <Text size={24} color={Ecolor.white} weight={600}>
                  Портфолио
                </Text>
                </button>
              <span onClick={clickHandlerSubPort} className={isSubPortMenuOpen ? styles.arrow + " " + styles.arrow__open : styles.arrow}></span>
              <ul className={isSubPortMenuOpen ? styles.subMenu__list + " " + styles.subMenu__open : styles.subMenu__list}>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef3.current)} className={styles.subMenu__link} aria-label="Индивидуальные съемки">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Индивидуальные съемки
                    </Text>
                    </button>
                </li>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef4.current)} className={styles.subMenu__link} aria-label="Семейные съемки">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Семейные съемки
                    </Text>
                    </button>
                </li>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef5.current)} className={styles.subMenu__link} aria-label="Lovestory">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Lovestory
                    </Text>
                    </button>
                </li>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef6.current)} className={styles.subMenu__link} aria-label="Свадебные съемки">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Свадебные съемки
                    </Text>
                    </button>
                </li>
              </ul>
            </li>
            <li className={styles.nav__item}>
              <button onClick={()=>scrollTo(artRef7.current)} className={styles.nav__link} aria-label="Услуги">
                <Text size={24} color={Ecolor.white} weight={600}>
                  Услуги
                </Text>
                </button>
              <span onClick={clickHandlerSubServ} className={isSubServMenuOpen ? styles.arrow + " " + styles.arrow__open : styles.arrow}></span>
              <ul className={isSubServMenuOpen ? styles.subMenu__list + " " + styles.subMenu__open : styles.subMenu__list}>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef8.current)} className={styles.subMenu__link} aria-label="Индивидуальные съемки">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Индивидуальные съемки
                    </Text>
                    </button>
                </li>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef9.current)} className={styles.subMenu__link} aria-label="Свадебные съемки">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Свадебные съемки
                    </Text>
                    </button>
                </li>
                <li className={styles.subMenu__item}>
                  <button onClick={()=>scrollTo(artRef10.current)} className={styles.subMenu__link} aria-label="Дополнительная информация">
                    <Text size={24} color={Ecolor.white} weight={400}>
                      Дополнительная информация
                    </Text>
                    </button>
                </li>
              </ul>
            </li>
            <li className={styles.nav__item}>
              <button onClick={()=>scrollTo(artRef11.current)} className={styles.nav__link} aria-label="Контакты">
                <Text size={24} color={Ecolor.white} weight={600}>
                  Контакты
                </Text>
                </button>
            </li>
          </ul>
        </nav>
        </div>
      </header>

  );
}
