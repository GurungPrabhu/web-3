import { ComponentContext } from "@components";
import { CONVERTER } from "@constants";
import { Button } from "@elements";
import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";

const WalletDetails: React.FC = () => {
  const { setVisibleComponent } = useContext(ComponentContext);
  const { deactivate, active, account, chainId, library } = useWeb3React();
  const [balance, setBalance] = useState("NA");

  useEffect(() => {
    if (!active) setVisibleComponent(CONVERTER);
    else
      library?.eth
        ?.getBalance(account)
        .then((blc: number) => setBalance(blc.toString()));
  }, [active]);

  const handleClose = (): void => {
    setVisibleComponent(CONVERTER);
  };

  const handleDisconnect = async (): Promise<void> => {
    try {
      await deactivate();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="glass wallet-details">
      <div className="row text-center pb-4">
        <span className="h5">Wallet Details</span>
      </div>
      <div className="row pt-4 pb-3">
        <div className="col">Account</div>
        <div className="col text-align-end">{account || "NA"}</div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-6">Chain ID</div>
        <div className="col-6 text-align-end">{chainId || "NA"}</div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-6"> Balance </div>
        <div className="col-6 text-align-end">{`ETH ${balance}`}</div>
      </div>
      <div className="row pt-2">
        <div className="action-btn-group">
          <Button type="danger" onClick={handleDisconnect}>
            Disconnect
          </Button>
          <Button type="outlined" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
export { WalletDetails };
