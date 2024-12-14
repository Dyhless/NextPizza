'use client'

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '../ui';

import { RangeSlider } from './range-slide';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/components/shared/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
   className?: string;
}

interface PriceProps { 
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

  const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 200 });

  const items = ingredients.map((item: { id: any; name: any; }) => ({ value: String(item.id), text: item.name }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    })
  } 

  return (
    <div className={className}>
      <Title text="Filtering" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: '20 sm', value: '20' },
          { text: '30 sm', value: '30' },
          { text: '40 sm', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={0}
            max={100}
            placeholder="100"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider min={0} max={200} step={10} value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
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

