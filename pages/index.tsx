import React, { useContext } from "react";
import type { NextPage } from "next";
import {
  Header,
  Footer,
  CurrencyConverter,
  WalletDetails,
  ComponentContext,
} from "@components";
import { WalletAlertModal } from "components/libs/wallet-alert-modal";
import { ALERT_MODAL, CONVERTER, WALLET_DETAIL } from "@constants";

const Home: NextPage = () => {
  const { visibleComponent } = useContext(ComponentContext);

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        {visibleComponent === CONVERTER && <CurrencyConverter />}
        {visibleComponent === ALERT_MODAL && <WalletAlertModal />}
        {visibleComponent === WALLET_DETAIL && <WalletDetails />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
