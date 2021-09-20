import _ from 'lodash';

export function paginate(items, pageNum, pageSize) {
  const startIndex = (pageNum - 1) * pageSize;

  // 1) Converts items array to a loDash wrapper with _(items)
  // 2) Start from an index then
  // 3) Take everything til the end of array and
  // 4) Return it back with .value()
  // prettier-ignore
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
