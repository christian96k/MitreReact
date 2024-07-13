export interface CardConfig {
  header: CardHeader;
  footer: CardFooter[];
}

export interface CardHeader {
  label: string;
  value: string;
  class?: string;
}

export interface CardFooter {
  icon: CardIcon;
  label?: string;
  actionType: CardAction;
  action: (actionType: CardAction) => void;
}

export enum CardAction {
  INFO = "info",
  SETTINGS = "settings",
}

export enum CardIcon {
  info = "icon-info",
  settings = "icon-settings",
  virus = "icon-virus",
}
