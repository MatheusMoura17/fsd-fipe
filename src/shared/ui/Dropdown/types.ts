export interface IDropdownItem {
  id: string;
  title: string;
}

export interface IDropdownProps {
  id: string;
  title?: string;
  data: IDropdownItem[];
  selectedId?: string;
  disabled?: boolean;
  onSelect?: (id: string) => void;
}
