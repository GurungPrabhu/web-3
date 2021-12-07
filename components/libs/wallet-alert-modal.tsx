import React, { useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ComponentContext, injected } from "@components";
import { CONVERTER, WALLET_DETAIL } from "@constants";
import { Button } from "@elements";

const WalletAlertModal: React.FC = () => {
  const { setVisibleComponent } = useContext(ComponentContext);
  const { activate, error, active } = useWeb3React();
  const [activating, setActivation] = useState(false);
  const [errorMessage, setError] = useState<undefined | string>();
  const [timeoutError, setTimeoutError] = useState(false);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (errorMessage) setTimeout(() => setError(undefined), 3000);
    if (timeoutError)
      setTimeout(() => {
        setTimeoutError(false);
        setActivation(false);
        location.reload();
      }, 6000);
  }, [errorMessage, timeoutError]);

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
      setError("Couldn't activate!");
    } finally {
      setActivation(false);
    }
  };

  const handleCancel = () => {
    setVisibleComponent(CONVERTER);
    setError("");
  };
  return (
    <div className="glass glass-danger p-5">
      <div className="row mb-4 h5 justify-content-center">
        <img src="/../error.png" className="exclamation-icon" />
        Wallet not Connected!
      </div>
      <div className="action-btn-group">
        <Button
          type={errorMessage ? `danger` : `primary`}
          onClick={handleClickConnect}
          disabled={errorMessage ? true : false}
        >
          {activating ? "Connecting" : errorMessage ? "Error" : "Connect"}
        </Button>
        <Button type="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
      {errorMessage && (
        <div className="row text-center text-danger">
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export { WalletAlertModal };
