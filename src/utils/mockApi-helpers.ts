import { ITask } from "@/app/projects/sprint-board/types/interfaces";

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

  const updatedItem: ITask = {};

  if (newItem.title && newItem.title !== items[itemIndex].title) {
    updatedItem.title = newItem.title;
  }
  if (
    newItem.description &&
    newItem.description !== items[itemIndex].description
  ) {
    updatedItem.description = newItem.description;
  }
  if (newItem.status && newItem.status !== items[itemIndex].status) {
    updatedItem.status = newItem.status;
  }
  if (newItem.priority && newItem.priority !== items[itemIndex].priority) {
    updatedItem.priority = newItem.priority;
  }
  if (
    newItem.assigneeId &&
    newItem.assigneeId !== items[itemIndex].assigneeId
  ) {
    updatedItem.assigneeId = newItem.assigneeId;
  }
  if (newItem.category && newItem.category !== items[itemIndex].category) {
    updatedItem.category = newItem.category;
  }
  if (newItem.startDate && newItem.startDate !== items[itemIndex].startDate) {
    updatedItem.startDate = newItem.startDate;
  }
  if (newItem.dueDate && newItem.dueDate !== items[itemIndex].dueDate) {
    updatedItem.dueDate = newItem.dueDate;
  }

  items[itemIndex] = { ...items[itemIndex], ...updatedItem };

  return items[itemIndex];
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
