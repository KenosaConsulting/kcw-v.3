import React, { useState, ReactNode, useId } from 'react';
import { ChevronDownIcon } from '../icons';
import { cn } from '../../lib/utils';

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  id: string;
  controlsId: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick, id, controlsId }) => {
  return (
    <div className="border-b border-navy-light">
      <h3 className="m-0">
        <button
          type="button"
          id={id}
          aria-controls={controlsId}
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200 hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-blue"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-lg">{title}</span>
          <ChevronDownIcon
            className={cn('w-6 h-6 shrink-0 transition-transform duration-200', {
              'rotate-180': isOpen,
            })}
          />
        </button>
      </h3>
      <div
        id={controlsId}
        role="region"
        aria-labelledby={id}
        className={cn('overflow-hidden transition-[max-height] duration-300 ease-in-out', {
          'max-h-screen': isOpen,
          'max-h-0': !isOpen,
        })}
      >
        <div className="p-5 border-t-0 border-navy-light">
          <div className="text-gray-400">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: { id: string; title: ReactNode; content: ReactNode }[] }> = ({ items }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(items.length > 0 ? items[0].id : null);
    const uniqueId = useId();

    const handleItemClick = (itemId: string) => {
        setOpenItemId(prevId => (prevId === itemId ? null : itemId));
    };

    return (
        <div className="border rounded-lg border-navy-light overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    id={`${uniqueId}-header-${index}`}
                    controlsId={`${uniqueId}-panel-${index}`}
                    title={item.title}
                    isOpen={openItemId === item.id}
                    onClick={() => handleItemClick(item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};