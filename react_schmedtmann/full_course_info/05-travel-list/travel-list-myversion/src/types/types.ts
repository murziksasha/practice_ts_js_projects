
export interface IListItems {
  id: number; 
  description: string; 
  quantity: string;
  packed: boolean;
  handleDelete?: (id: number) => void;
  handleToggleItem?: (id: number) => void;
}