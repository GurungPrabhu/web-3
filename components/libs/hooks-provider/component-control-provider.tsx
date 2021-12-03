import React from "react";
import { CONVERTER } from "@constants";
import { useState } from "react";
import {
  ComponentContextProviderProps,
  IComponentContext,
  IVisibleComponent,
} from "@models";

const ComponentContext = React.createContext<IComponentContext>({
  setVisibleComponent: (_name) => {},
  visibleComponent: CONVERTER,
});

const ComponentContextProvider: React.FC<ComponentContextProviderProps> = ({
  children,
}: ComponentContextProviderProps) => {
  const [visibleComponent, _setVisibleComponent] =
    useState<IVisibleComponent>(CONVERTER);

  const setVisibleComponent = (value: IVisibleComponent): void => {
    _setVisibleComponent(value);
  };

  return (
    <ComponentContext.Provider
      value={{ setVisibleComponent, visibleComponent }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContextProvider, ComponentContext };
