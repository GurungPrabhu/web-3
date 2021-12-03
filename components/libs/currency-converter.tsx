import {
  BUSD,
  BUSD_NEP_EXCHANGE_RATE,
  INITIAL_STATE,
  INVALID_INPUT_TYPE,
  NEP,
  PLACEHOLDER,
  REG_FOR_NUM,
} from "@constants";
import { Button } from "@elements";
import React, { FormEvent, useState } from "react";

const calculateBusdAndNepExchange = (
  value: string,
  type: "nep" | "busd"
): string => {
  if (value !== "") {
    if (type === "nep")
      return (parseFloat(value) / BUSD_NEP_EXCHANGE_RATE).toFixed(2);
    return (parseFloat(value) * BUSD_NEP_EXCHANGE_RATE).toFixed(2);
  }
  return "";
};

const CurrencyConverter = () => {
  const [nepValue, setNepValue] = useState("");
  const [busdValue, setBusdValue] = useState("");
  const [selectedField, setSelectedField] = useState<string>();
  const [errors, setErrors] = useState(INITIAL_STATE);

  const handleNepChange = (e: FormEvent<HTMLInputElement>): void => {
    if (selectedField === NEP && REG_FOR_NUM.test(e?.currentTarget?.value)) {
      setErrors(INITIAL_STATE);
      setBusdValue(calculateBusdAndNepExchange(e?.currentTarget.value, NEP));
      setNepValue(e?.currentTarget?.value);
    } else setErrors((errors) => ({ ...errors, nep: INVALID_INPUT_TYPE }));
  };

  const handleBusdChange = (e: FormEvent<HTMLInputElement>): void => {
    if (selectedField === BUSD && REG_FOR_NUM.test(e?.currentTarget?.value)) {
      setErrors(INITIAL_STATE);
      setNepValue(calculateBusdAndNepExchange(e?.currentTarget?.value, BUSD));
      setBusdValue(e?.currentTarget?.value);
    } else setErrors((errors) => ({ ...errors, busd: INVALID_INPUT_TYPE }));
  };

  const handleFocus = (e: FormEvent<HTMLInputElement>): void => {
    if (selectedField !== e.currentTarget.name)
      setSelectedField(e.currentTarget.name);
  };

  const handleInputClick = (e: FormEvent<HTMLInputElement>): void => {
    setSelectedField(e.currentTarget.name);
  };

  const handleClearFields = (): void => {
    setNepValue("");
    setBusdValue("");
  };

  return (
    <div
      className={`glass ${
        (errors.busd.length > 0 || errors.nep.length > 0) && "glass-danger"
      } currency-converter
      `}
    >
      <div className="pt-2 pb-3">
        <div className="row justify-content-center h3 mb-1">NEP-BUSD</div>
        <div className="row justify-content-center">Converter</div>
      </div>
      <div className="form-group">
        <label>NEP</label>
        <input
          type="text"
          name={NEP}
          className="form-control"
          placeholder={PLACEHOLDER.NEP}
          onClick={handleInputClick}
          onChange={handleNepChange}
          onFocus={handleFocus}
          value={nepValue}
        />
        {errors.nep?.length > 0 && (
          <span className="invalid-feedback">{INVALID_INPUT_TYPE}</span>
        )}
      </div>
      <div className="form-group mt-3">
        <label>BUSD</label>
        <input
          type="text"
          name={BUSD}
          placeholder={PLACEHOLDER.BUSD}
          className="form-control"
          onFocus={handleFocus}
          onChange={handleBusdChange}
          onClick={handleInputClick}
          value={busdValue}
        />
        {errors.busd?.length > 0 && (
          <span className="invalid-feedback">{INVALID_INPUT_TYPE}</span>
        )}
      </div>
      <div className="row pt-4 text-center">
        <Button
          type="outlined"
          onClick={handleClearFields}
          disabled={nepValue?.length === 0 || busdValue?.length === 0}
        >
          Clear Fields
        </Button>
      </div>
    </div>
  );
};

export { CurrencyConverter };
