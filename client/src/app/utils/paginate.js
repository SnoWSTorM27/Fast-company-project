export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return Object.values(items).splice(startIndex, pageSize);
}
