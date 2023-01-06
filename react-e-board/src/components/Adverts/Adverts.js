import React, {useEffect, useState} from 'react';
import s from './Adverts.module.css';

import {useLocation} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import mapAdListToAdJSX from "../../mapAdListToAdJSX";
import SearchFilterContainer from "./SearchFilter/SearchFilterContainer";

const Adverts = (props) => {

  const location = useLocation();
  const search = decodeURI(location.search).toString().slice(2);

  const namePage = props.namePage;
  const currentCategory = props.currentCategory;

  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [itemList, setItemList] = useState([]);

  const handleLoadMore = () => {

    if (!isLoading && currentCategory !== null) {
      setIsLoading(true);
      setHasMore(false);

      props.getAdverts({page, currentCategory, search});

      setPage(page + 1);
    }
  }

  useEffect(() => {

    setHasMore((itemList.length !== props.adverts.length) && (itemList !== props.adverts));
    setItemList(mapAdListToAdJSX(props.adverts));
    setIsLoading(false);

  }, [props.adverts]);

  return (
      <div className={s.content}>
        <div className={s.headerName}>
          <h4 className={s.h4}>{namePage}</h4>
        </div>

        <div className={s.adverts__container}>
          <InfiniteScroll
              pageStart={0}
              loadMore={handleLoadMore}
              hasMore={hasMore}
              loader={<div className={s.loader} key={0}>Loading ...</div>}>
            <div className={s.adverts}>
              {itemList}
              {itemList.length === 0 && <span className={s.error}>Объявлений по запросу не найдено!</span>}
            </div>
          </InfiniteScroll>

        </div>
      </div>
  );
};

export default Adverts;