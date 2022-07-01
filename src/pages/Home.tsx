import React, { useCallback, useEffect, useRef } from "react";
import {useSelector } from "react-redux";
import {Categories, PizzaBlock, Sort, Pagination, Skeleton,} from "../components/index.js";

import { useAppDispatch } from "../redux/store";
import { selectPizzaData } from "../redux/pizza/selectors";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";

const Home:React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const {items, status} = useSelector(selectPizzaData)
  
  const { categoryId, currentPage, sort, searchValue } = useSelector(
    selectFilter
  );

  const onChangeCategory = useCallback ((idx: number) => {
    dispatch(setCategoryId(idx));
  }, [])

  const onChangePage = (page:number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async   () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

      dispatch( 
        fetchPizzas({
          order,
          sortBy,
          category,
          search,
          currentPage: String(currentPage + 1)
        }));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    
      getPizzas()
    isSearch.current = false
  }, [categoryId,  sort.sortProperty, searchValue, currentPage]);


  const sceleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((obj:any) => (
      <PizzaBlock key={obj.id} {...obj} />
    ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort value={sort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ?
        <div className="content__error-info">
          <h2>Произошла ошибка <span>😕</span></h2>
          <p>К сожалению, не удалось получить данные. Повторите попытку позднее</p>
        </div> :
        <div className="content__items">{status === 'loading' ? sceleton : pizzas}</div>
      }
      
      <Pagination
       currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
