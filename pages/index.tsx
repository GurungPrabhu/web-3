import React from "react";
import type { NextPage } from "next";
import { Header, Footer, CurrencyConverter, WalletDetails } from "@components";
import { WalletAlertModal } from "components/libs/wallet-alert-modal";

const Home: NextPage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        {/* <CurrencyConverter /> */}
        {/* <WalletAlertModal visible={true} /> */}
        <WalletDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
