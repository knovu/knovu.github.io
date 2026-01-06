import type { Tab } from '@src/@types';

const VALID_TABS: Tab[] = ['dealerops', 'saia', 'kahua', 'sap'] as const;

export const getTabFromHash = (): Tab => {
  if (typeof window === 'undefined') return 'dealerops';

  const hash = window.location.hash.replace('#', '');

  return VALID_TABS.includes(hash as Tab) ? (hash as Tab) : 'dealerops';
};
