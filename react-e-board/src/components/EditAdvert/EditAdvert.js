import React, {useEffect} from 'react';

import s from './EditAdvert.module.css'
import Characteristics from "../CreateAd/Characteristics/Characteristics";
import {Navigate, useParams} from "react-router-dom";
import MainCharacteristic from "../CreateAd/MainCharacteristic/MainCharacteristic";
import useLocalStorage from "../../hooks/useLocalStorage";

const EditAdvert = (props) => {

  const adId = parseInt(useParams().id);
  const [token] = useLocalStorage(null,'token');

  useEffect( () => {
    if (props.currentAdvert === null && token !== "null") {
      props.getCurrentAdvert(adId);
      props.getCurrentCharact(adId);
    }
  }, [props.currentAdvert]);

  useEffect(() => {
    if (props.tokenData === null && token !== "null")
      props.getTokenData(token);
  }, [props.tokenData]);

  useEffect( () => {
    if (props.currentAdvert !== null && props.currentCharact) {
      props.changeHeader(props.currentAdvert.header);
      props.changeDescription(props.currentAdvert.description);
      props.changePrice(props.currentAdvert.price);

      props.changeBrand(props.currentCharact.brand);
      props.changeCapacity(props.currentCharact.capacity);
      props.changeGears(props.currentCharact.gears);
      props.changeMilage(props.currentCharact.milage);
      props.changeMonthlyCost(props.currentCharact.monthlyCost);
      props.changeRelaseYear(props.currentCharact.relaseYear);
      props.changeRent(props.currentCharact.rent);
      props.changeRentPeriod(props.currentCharact.rentPeriod);
      props.changeRoomNumber(props.currentCharact.roomNumber);
      props.changeStage(props.currentCharact.floorCount);
      props.changeStages(props.currentCharact.floor);
      props.changeWasInUse(props.currentCharact.wasInUse);
      props.changeWheelDrive(props.currentCharact.wheelDrive);
    }
  }, [props.currentAdvert, props.currentCharact]);

  return (
      <div className={s.edit}>
        {props.deleted &&
            <Navigate to={`/`}/>
        }

        <h3 className={s.h3}>Редактирование объявления</h3>

          {token !== "null" && props.currentAdvert !== null && props.tokenData !== null &&
              (props.tokenData.user_name === props.currentAdvert.owner || props.tokenData.authorities[0] === "ADMIN") &&
              <div className={s.edit__container}>
                <form className={s.edit__form}>
                  <MainCharacteristic store={props}/>

                  <Characteristics updateAdvert={props.updateAdvert}
                                   updateCharact={props.updateCharact}
                                   store={props}
                                   type={{id: props.currentAdvert.subId}}
                                   deleteAdvert={props.deleteAdvert}/>
                </form>
              </div>
          }
          {token === "null" || (props.currentAdvert !== null && props.tokenData !== null &&
                  (props.tokenData.user_name !== props.currentAdvert.owner && props.tokenData.authorities[0] !== "ADMIN")) &&
              <span className={s.edit__error}>У Вас нет прав на редактирование данного объявления :(</span>
          }

      </div>
  );
};

export default EditAdvert;