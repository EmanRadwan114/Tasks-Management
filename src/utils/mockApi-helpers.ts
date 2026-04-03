// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addItem(newItem: any, items: any[]) {
  const item = { ...newItem, id: items.length + 1 };
  items.push(item);
  return item;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetchItems(id: number, items: any[]) {
  const item = items.find((item) => item.id === id);

  if (!item) {
    return null;
  }
  return item;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateItem(id: number, newItem: any, items: any[]) {
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return null;
  }
  const updatedItem = { ...items[itemIndex], ...newItem };
  items[itemIndex] = updatedItem;
  return updatedItem;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function archiveItem(id: number, items: any[]) {
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return null;
  }
  const archivedItem = { ...items[itemIndex], archived: true };
  items[itemIndex] = archivedItem;
  return archivedItem;
}

export function fetchFilteredItems(
  key: string,
  value: string | number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[],
) {
  const fetchedItems = items.filter((item) => item[key] === value);
  return fetchedItems;
}
