export default function defaultDict<K extends PropertyKey, V>(factory: () => V): Record<K, V> {
  return new Proxy({} as Record<K, V>, {
    get(target, key: PropertyKey) {
      const k = key as K;

      if (!(k in target)) {
        target[k] = factory();
      }
      return target[k];
    },
  });
}
