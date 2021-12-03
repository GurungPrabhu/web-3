import { ComponentContext, injected } from "@components";
import { CONVERTER, WALLET_DETAIL } from "@constants";
import { Button } from "@elements";
import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";

const WalletAlertModal: React.FC = () => {
  const { setVisibleComponent } = useContext(ComponentContext);
  const { activate, error, active } = useWeb3React();
  const [activating, setActivation] = useState(false);
  const [isError, setError] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);

  useEffect(() => {
    if (error) setError(true);
  }, [error]);

  useEffect(() => {
    if (isError) setTimeout(() => setError(false), 3000);
    if (timeoutError)
      setTimeout(() => {
        setTimeoutError(false);
        setActivation(false);
        location.reload();
      }, 6000);
  }, [isError, timeoutError]);

  useEffect(() => {
    if (activating)
      setTimeout(() => {
        if (activating) setTimeoutError(true);
      }, 30000);
  }, [activating]);

  useEffect(() => {
    if (active) setVisibleComponent(WALLET_DETAIL);
  }, [active]);

  const handleClickConnect = async (): Promise<void> => {
    setActivation(true);
    try {
      await activate(injected);
    } catch (err) {
      setError(true);
    } finally {
      setActivation(false);
    }
  };

  return (
    <div className="glass glass-danger p-5">
      <div className="row mb-4 h5">
        <img src="/../error.png" className="exclamation-icon" />
        Wallet not Connected!
      </div>
      <div className="action-btn-group">
        <Button
          type={isError ? `danger` : `primary`}
          onClick={handleClickConnect}
          disabled={isError && true}
        >
          {activating ? "Connecting" : isError ? "Error" : "Connect"}
        </Button>
        <Button type="outlined" onClick={() => setVisibleComponent(CONVERTER)}>
          Cancel
        </Button>
      </div>
      {timeoutError && (
        <div className="row text-center text-danger">
          <span>Request timeout!</span>
        </div>
      )}
    </div>
  );
};

export { WalletAlertModal };
