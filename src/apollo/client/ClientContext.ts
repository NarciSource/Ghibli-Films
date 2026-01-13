export type ClientContext = {
  kind: ClientKind;
  isServer: boolean;
};

export type ClientKind = 'anonymous' | 'authenticated';
