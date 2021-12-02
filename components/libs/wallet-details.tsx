import { Button } from "@elements";
import React from "react";

const WalletDetails: React.FC = () => {
  return (
    <div className="glass wallet-details">
      <div className="row text-center pb-4">
        <span className="h5">Wallet Details</span>
      </div>
      <div className="row pt-4 pb-3">
        <div className="col-6">Account</div>
        <div className="col-6 text-align-end">123120021030123</div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-6">Chain ID</div>
        <div className="col-6 text-align-end">97</div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-6"> Balance </div>
        <div className="col-6 text-align-end">E10</div>
      </div>
      <div className="row pt-2">
        <div className="action-btn-group">
          <Button type="danger">Disconnect</Button>
          <Button type="outlined">Cancel</Button>
        </div>
      </div>
    </div>
  );
};
export { WalletDetails };
