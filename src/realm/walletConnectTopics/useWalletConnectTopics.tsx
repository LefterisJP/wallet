import { useObject } from '../RealmContext';

import { REALM_TYPE_WALLET_CONNECT_TOPICS, RealmWalletConnectTopics } from './schema';

export const useRealmWalletConnectTopics = <T extends string | undefined>(topic: T) => {
  return useObject<RealmWalletConnectTopics, T>(REALM_TYPE_WALLET_CONNECT_TOPICS, topic, 'topic');
};
