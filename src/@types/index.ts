export type Id = number | string;

export type Datasource = 'GITHUB';

export type Tab = 'dealerops' | 'saia' | 'kahua' | 'sap';

export interface OpenChangeDetails {
  open: boolean;
}

export interface ValueChangeDetails {
  value: string;
}
