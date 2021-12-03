import React, { useContext } from "react";
import { Button } from "@elements";
import { useWeb3React } from "@web3-react/core";
import { ComponentContext } from "@components";
import { ALERT_MODAL, WALLET_DETAIL } from "@constants";

const Header: React.FC = () => {
  const { active } = useWeb3React();
  const { setVisibleComponent } = useContext(ComponentContext);

  const handleClick = (): void => {
    if (active) setVisibleComponent(WALLET_DETAIL);
    else {
      setVisibleComponent(ALERT_MODAL);
    }
  };

  return (
    <div className="header">
      <Button type="primary" onClick={handleClick}>
        My Wallet
      </Button>
    </div>
  );
};

export { Header };
