import React, {useEffect, useState} from 'react';
import styles from './portfolio.module.scss';
import stylesGlobal from '../../main.global.scss'
import {Ecolor, Text} from "../Text";
import {Card} from "./Card";
import {useResize} from "../../use-resize";
import {AppDispatch} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchIndividuals, selectIndividuals, Status} from "../../redux/slices/individualSlice";
import {selectValues, setFormValue} from "../../redux/slices/valuesSlice";
import {fetchFamilys, selectFamilys} from "../../redux/slices/familySlice";
import {fetchLoveStorys, selectLoveStorys} from "../../redux/slices/loveStorySlice";
import {fetchWeddings, selectWeddings} from "../../redux/slices/weddingSlice";
import {Skeletons} from "../Skeletons";

export interface MyRefPortfolio {
    artRef2: any,
    artRef3: any,
    artRef4: any,
    artRef5: any,
    artRef6: any,

}
export interface Obj   {
  id: number,
  mainImage: string,
  title: string,

}

export function Portfolio({ artRef2, artRef3, artRef4, artRef5, artRef6}:MyRefPortfolio) {
    const dispatch = useDispatch<AppDispatch>()
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
    const {isQuantity} = useSelector(selectValues);
    const { individual, statusInd }= useSelector(selectIndividuals);
    const { familys, statusFM }= useSelector(selectFamilys);
    const { loveStorys, statusLv }= useSelector(selectLoveStorys);
    const { weddings, statusWd }= useSelector(selectWeddings);

    async function FetchIndividual(){
        dispatch(fetchIndividuals())
    }
    async function FetchFamily(){
        dispatch(fetchFamilys())
    }
    async function FetchLoveStory(){
        dispatch(fetchLoveStorys())
    }
    async function FetchWedding(){
        dispatch(fetchWeddings())
    }



    useEffect(() => {
            if (isScreenXl) {
                    dispatch(setFormValue(12))
            }
            if (isScreenLg && !isScreenXl) {
                    dispatch(setFormValue(6))
            }
            if (isScreenMd && !isScreenLg) {
                    dispatch(setFormValue(4))
            }
            if (isScreenSm && !isScreenMd) {
                    dispatch(setFormValue(2))
            }

    }, [width]);

    useEffect(() => {
        FetchIndividual(),
        FetchFamily(),
        FetchLoveStory(),
        FetchWedding()
    }, [isQuantity]);


    const [visibleIndividual, setVisibleIndividual] = useState(isQuantity);
    const [visibleFamily, setVisibleFamily] = useState(isQuantity);
    const [visibleLoveStory, setVisibleLoveStory] = useState(isQuantity);
    const [visibleWedding, setVisibleWedding] = useState(isQuantity);
    const showMoreIndividual = () =>{
      setVisibleIndividual((prevValue)=>prevValue + 2)
    }
    const showMoreFamily = () =>{
      setVisibleFamily((prevValue)=>prevValue + 2)
    }
    const showMoreLoveStory = () =>{
      setVisibleLoveStory((prevValue)=>prevValue + 2)
    }
    const showMoreWedding = () =>{
      setVisibleWedding((prevValue)=>prevValue + 2)
    }

  const renderIndividuals = () =>{
    return  individual.slice(0, visibleIndividual).map((item , index)=>(
        <Card
            key={index}
            id={item.id}
            mainImage={item.mainImage}
            title={item.title}
        />
    ))
  }
  const renderFamilys = () =>{
    return  familys.slice(0, visibleFamily).map((item , index)=>(
        <Card
            key={index}
            id={item.id}
            mainImage={item.mainImage}
            title={item.title}
        />
    ))
  }
  const renderLoveStorys = () =>{
    return  loveStorys.slice(0, visibleLoveStory).map((item , index)=>(
        <Card
            key={index}
            id={item.id}
            mainImage={item.mainImage}
            title={item.title}
        />
    ))
  }
  const renderWeddings = () =>{
    return  weddings.slice(0, visibleWedding).map((item , index)=>(
        <Card
            key={index}
            id={item.id}
            mainImage={item.mainImage}
            title={item.title}
        />
    ))
  }

    useEffect(() => {
        setVisibleIndividual(isQuantity),
            setVisibleFamily(isQuantity),
        setVisibleLoveStory(isQuantity),
            setVisibleWedding(isQuantity)
    }, [isQuantity]);


    const skeletons = [...new Array(1)].map((_,index)=><Skeletons key={index}/>)
  return (
      <section ref={artRef2} className={styles.portfolio}>
        <div className={stylesGlobal.container}>
          <div className={styles.portfolio__container}>
            <div className={stylesGlobal.sectionTitle}>
              <Text As="h2" size={28} mobileSize={24} color={Ecolor.white} weight={700}>
                Портфолио
              </Text>
            </div>
            <div ref={artRef3} className={styles.portfolio__title}>
              <Text As="h3" size={24} mobileSize={20} color={Ecolor.white} weight={600}>
                Индивидуальные съемки
              </Text>
            </div>
            <div className={styles.portfolio__wrapper}>
              <ul className={styles.portfolio__grid}>
                  {
                      statusInd === Status.ERROR ? (
                              <div className={styles.error}>
                                  <div className={styles.cartTitleEmpty}>
                                      <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                                          Произошла ошибка загрузки
                                      </Text>
                                      <Text As='p' size={16} color={Ecolor.grey9D} weight={400}>
                                          Мы уже работаем над ее устранением
                                      </Text>
                                  </div>
                              </div>)
                          : (
                              <>
                                  {//рендерим карточки
                                      statusInd === Status.LOADING ? skeletons : renderIndividuals()
                                  }
                              </>
                          )
                  }
              </ul>
              <button onClick={showMoreIndividual}
                  className={visibleIndividual < individual.length ? styles.portfolio__btn + " " + styles.btn + " " + styles.btn__stroke : styles.disable} >
                <Text  size={16} mobileSize={12} color={Ecolor.white} weight={600}>
                  Показать еще
                </Text>
              </button>
            </div>
            <div ref={artRef4} className={styles.portfolio__title}>
              <Text As="h3" size={24} mobileSize={20} color={Ecolor.white} weight={600}>
                Семейные съемки
              </Text>
            </div>
            <div className={styles.portfolio__wrapper}>
              <ul className={styles.portfolio__grid}>
                  {
                      statusFM === Status.ERROR ? (
                              <div className={styles.error}>
                                  <div className={styles.cartTitleEmpty}>
                                      <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                                          Произошла ошибка загрузки
                                      </Text>
                                      <Text As='p' size={16} color={Ecolor.grey9D} weight={400}>
                                          Мы уже работаем над ее устранением
                                      </Text>
                                  </div>
                              </div>)
                          : (
                              <>
                                  {//рендерим карточки
                                      statusFM === Status.LOADING ? skeletons : renderFamilys()
                                  }
                              </>
                          )
                  }
              </ul>
              <button onClick={showMoreFamily}
                  className={visibleFamily < familys.length ? styles.portfolio__btn + " " + styles.btn + " " + styles.btn__stroke : styles.disable}>
                <Text  size={16} mobileSize={12} color={Ecolor.white} weight={600}>
                  Показать еще
                </Text>
              </button>
            </div>
            <div ref={artRef5} className={styles.portfolio__title}>
              <Text As="h3" size={24} mobileSize={20} color={Ecolor.white} weight={600}>
                Lovestory
              </Text>
            </div>
            <div className={styles.portfolio__wrapper}>
              <ul className={styles.portfolio__grid}>
                  {
                      statusLv === Status.ERROR ? (
                              <div className={styles.error}>
                                  <div className={styles.cartTitleEmpty}>
                                      <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                                          Произошла ошибка загрузки
                                      </Text>
                                      <Text As='p' size={16} color={Ecolor.grey9D} weight={400}>
                                          Мы уже работаем над ее устранением
                                      </Text>
                                  </div>
                              </div>)
                          : (
                              <>
                                  {//рендерим карточки
                                      statusLv === Status.LOADING ? skeletons : renderLoveStorys()
                                  }
                              </>
                          )
                  }

              </ul>
              <button onClick={showMoreLoveStory}
                  className={visibleLoveStory < loveStorys.length ? styles.portfolio__btn + " " + styles.btn + " " + styles.btn__stroke : styles.disable}>
                <Text  size={16} mobileSize={12} color={Ecolor.white} weight={600}>
                  Показать еще
                </Text>
              </button>
            </div>
            <div ref={artRef6} className={styles.portfolio__title}>
              <Text As="h3" size={24} mobileSize={20} color={Ecolor.white} weight={600}>
                Свадебные
              </Text>
            </div>
            <div className={styles.portfolio__wrapper}>
              <ul className={styles.portfolio__grid}>
                  {
                      statusWd === Status.ERROR ? (
                              <div className={styles.error}>
                                  <div className={styles.cartTitleEmpty}>
                                      <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                                          Произошла ошибка загрузки
                                      </Text>
                                      <Text As='p' size={16} color={Ecolor.grey9D} weight={400}>
                                          Мы уже работаем над ее устранением
                                      </Text>
                                  </div>
                              </div>)
                          : (
                              <>
                                  {//рендерим карточки
                                      statusWd === Status.LOADING ? skeletons : renderWeddings()
                                  }
                              </>
                          )
                  }
              </ul>
              <button onClick={showMoreWedding}
                  className={visibleWedding < weddings.length ? styles.portfolio__btn + " " + styles.btn + " " + styles.btn__stroke : styles.disable}>
                <Text  size={16} mobileSize={12} color={Ecolor.white} weight={600}>
                  Показать еще
                </Text>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
