// Libs
import {useEffect, useRef, useState} from 'react';
import {GoChevronDown} from 'react-icons/go';
// Shared
import useOutsideClick from '@/shared/hooks/useOutsideClick';
// Local
import {IDropdownItem, IDropdownProps} from './types';
import {
  DropdownContainer,
  DropdownButton,
  DropdownModal,
  DropdownLi,
  DropdownUl,
} from './styles';

export const Dropdown: React.FC<IDropdownProps> = ({
  id,
  title = 'Select',
  data,
  selectedId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IDropdownItem | undefined>(
    selectedId ? data?.find(item => item.id === selectedId) : undefined,
  );

  const handleChange = (item: IDropdownItem) => {
    setSelectedItem(item);
    onSelect?.(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find(item => item.id === selectedId);
      if (newSelectedItem) setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedItem?.title || title}</span>
        <GoChevronDown
          size={20}
          style={{
            transform: isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
          }}
        />
      </DropdownButton>
      {/* Open */}
      {isOpen && (
        <DropdownModal aria-label="Dropdown menu">
          <DropdownUl
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical">
            {data?.map(item => (
              <DropdownLi key={item.id} onClick={() => handleChange(item)}>
                <span>{item.title}</span>
              </DropdownLi>
            ))}
          </DropdownUl>
        </DropdownModal>
      )}
    </DropdownContainer>
  );
};
export default Dropdown;
