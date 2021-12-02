import { Button } from "@elements";
import React from "react";
import Image from "next/image";

interface WalletAlertModalProps {
  visible: boolean;
}
const WalletAlertModal: React.FC<WalletAlertModalProps> = ({
  visible,
}: WalletAlertModalProps) => {
  return (
    <div className="glass glass-danger p-5">
      <div className="row mb-4 h5">
        <img src="/../error.png" className="exclamation-icon" />
        Wallet not Connected!
      </div>
      <div className="action-btn-group">
        <Button type="primary">Connect</Button>
        <Button type="outlined">Cancel</Button>
      </div>
    </div>
  );
};

export { WalletAlertModal };
