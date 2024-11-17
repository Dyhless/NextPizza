'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId) as (id: number) => void;

  React.useEffect(() => {
    if (intersection?.isIntersecting && typeof setActiveCategoryId === 'function') {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

function useCategoryStore(selector: (state: any) => any): any {
  const store = {
    setActiveId: (id: number) => {
      console.log(`Active category set to: ${id}`);
    },
  };
  return selector(store);
}