export interface ComponentContextProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export type IVisibleComponent = "converter" | "alert-modal" | "wallet-detail";

export interface IComponentContext {
  visibleComponent: IVisibleComponent;
  setVisibleComponent: (componentName: IVisibleComponent) => void;
}
