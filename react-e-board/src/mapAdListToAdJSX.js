import React from 'react';
import Advert from "./components/Adverts/Advert/Advert";

const mapAdListToAdJSX = (adverts) => {
  let key = 0;
  return adverts.map(ad => {
        return <Advert key={key++} adId={ad.adId}
                       photos={ad.photos === null ? [] : ad.photos}
                       header={ad.header}
                       description={ad.description}
                       price={ad.price}
                       createdAt={ad.createdAt === null ? 'Нет информации' : ad.createdAt}/>
      }
  );
}

export default mapAdListToAdJSX;