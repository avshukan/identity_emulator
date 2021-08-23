function getPropertyByKeyFragment(object, keyFragment) {
  if (object === null) return false;
  if (typeof object !== 'object') return false;
  const keys = Object
    .keys(object)
    .filter((key) => (new RegExp(keyFragment, 'gi')).test(key));
  if (keys.length === 0) return false;
  const result = object[keys[0]];
  if (Array.isArray(result)) return result[0];
  return result;
}

module.exports = getPropertyByKeyFragment;
