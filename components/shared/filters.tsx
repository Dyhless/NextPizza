'use client'

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '../ui';

import { RangeSlider } from './range-slide';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/components/shared/hooks/useFilterIngredients';

interface Props {
   className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useIngredients();

  const items = ingredients.map((item: { id: any; name: any; }) => ({ value: String(item.id), text: item.name }));

  return (
    <div className={className}>
      <Title text="Filtering" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collectible" value="1" />
        <FilterCheckbox text="New Items" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={100} defaultValue={0} />
          <Input type="number" min={0} max={100} placeholder="100" />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Format"
        name='ingredients'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIds}
      />
    </div>
  );
};

