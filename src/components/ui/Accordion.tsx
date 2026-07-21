"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="card-premium border border-brand-violet/10 overflow-hidden rounded-xl bg-brand-dark/45"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-5 text-left font-display font-bold text-brand-light focus:outline-none focus:bg-brand-violet/10 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-button-${item.id}`}
            >
              <span className="text-base md:text-lg pr-4">{item.title}</span>
              <ChevronDown
                className={`h-5 w-5 text-brand-violet transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] border-t border-brand-violet/5 p-5" : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="text-sm md:text-base text-brand-light/80 leading-relaxed space-y-2">
                {item.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
