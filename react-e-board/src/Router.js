import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

import Footer from "./components/Footer/Footer";

import Immovables from "./components/Categories/Immovables/Immovables";
import Transport from "./components/Categories/Transport/Transport";
import Household from "./components/Categories/Household/Household";

import CreateAdContainer from "./components/CreateAd/CreateAdContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import ViewAdContainer from "./components/ViewAd/ViewAdContainer";
import MyAdvertsContainer from "./components/Profile/MyAdverts/MyAdvertsContainer";
import ProfileSettingsContainer from "./components/Profile/Settings/ProfileSettingsContainer";
import AdvertsContainer from "./components/Adverts/AdvertsContainer";
import ViewUserContainer from "./components/ViewUser/ViewUserContainer";
import DataContainer from "./components/Data/DataContainer";
import ConfirmAccountContainer from "./components/Authentication/ConfirmAccount/ConfirmAccountContainer";

import Categories from "./components/Categories/Categories";
import Loader from "./components/Loader/Loader";
import ResetPasswordContainer from "./components/Authentication/ResetPassword/ResetPasswordContainer";
import OAuthContainer from "./components/Authentication/OAuth/OAuthContainer";
import NoAccess from "./components/NoAccess/NoAccess";
import EditAdvertContainer from "./components/EditAdvert/EditAdvertContainer";

const Router = (props) => {

  const locate = useLocation().pathname;

  const mainPage = props.mainPage;
  const adSearch = props.adSearch;

  const immovables = props.immovables;
  const transport = props.transport;
  const household = props.household;

  const appartaments = props.appartaments;
  const houses = props.houses;

  const cars = props.cars;
  const moto = props.moto;

  const appliance = props.appliance;
  const furniture = props.furniture;

  const isContentLoaded = props.isContentLoaded;
  const currentCategory = props.currentCategory;

  return (
    <div>
      <NavBarContainer/>
      {isContentLoaded && currentCategory !== null &&
          <div style={{minHeight: '463px'}}>
            <Routes>

              <Route path={mainPage.url} element={<Categories catList={[immovables, transport, household]}/>}/>

              <Route path={immovables.categoryUrl} element={<Immovables catList={[appartaments, houses, transport, household]}/>}/>
              <Route path={transport.categoryUrl} element={<Transport catList={[immovables, cars, moto, household]}/>}/>
              <Route path={household.categoryUrl} element={<Household catList={[immovables, transport, appliance, furniture]}/>}/>

              <Route path={appartaments.subcategoryUrl} element={<Immovables catList={[appartaments, houses, transport, household]}/>}/>}/>
              <Route path={houses.subcategoryUrl} element={<Immovables catList={[appartaments, houses, transport, household]}/>}/>}/>

              <Route exact path={cars.subcategoryUrl} element={<Transport catList={[immovables, cars, moto, household]}/>}/>
              <Route exact path={moto.subcategoryUrl} element={<Transport catList={[immovables, cars, moto, household]}/>}/>

              <Route exact path={appliance.subcategoryUrl} element={<Household catList={[immovables, transport, appliance, furniture]}/>}/>
              <Route exact path={furniture.subcategoryUrl} element={<Household catList={[immovables, transport, appliance, furniture]}/>}/>

              <Route exact path={"/ad/create"} element={
                props.isAuth ? <CreateAdContainer/> :
                  <NoAccess catList={[immovables, transport, household]}/>
              }/>

              <Route exact path={"/profile/advert"} element={
                props.isAuth ? <MyAdvertsContainer/> :
                    <NoAccess catList={[immovables, transport, household]}/>
              }/>

              <Route exact path={"/profile/settings"} element={
                props.isAuth ? <ProfileSettingsContainer/> :
                    <NoAccess catList={[immovables, transport, household]}/>
              }/>

              <Route exact path={"/ad/id:id"} element={<ViewAdContainer/>}/>

              <Route exact path={"/user/id:id"} element={<ViewUserContainer/>}/>

              <Route exact path={"/user/confirm_account/:code"} element={<ConfirmAccountContainer/>}/>
              <Route exact path={"/user/reset_password/:code"} element={<ResetPasswordContainer/>}/>

              <Route exact path={"/edit/advert/id:id"} element={<EditAdvertContainer/>}/>

              <Route path={"/*"} element={<Categories catList={[immovables, transport, household]}/>}/>
            </Routes>

            {(locate === mainPage.url || locate.includes(immovables.categoryUrl) || locate.includes(transport.categoryUrl) ||
                    locate.includes(household.categoryUrl) || locate.includes(adSearch.url)) && <AdvertsContainer/>
            }
          </div>
      }

      {!isContentLoaded && <Loader/>}

      <DataContainer/>
      <Footer/>
      <OAuthContainer/>

    </div>
  )
};

export default Router;