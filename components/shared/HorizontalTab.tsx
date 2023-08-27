'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setOpenTab(index);

      onClick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-20'>
      {/* TABS  */}
      <div className='flex items-center self-center'>
        {tabs.map((tab: string, index: number) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={cn(
              'eoq flex h-[4rem] w-[15rem] items-center justify-center whitespace-nowrap border border-grey px-6 py-3 text-center text-lg font-semibold tracking-widest',
              index === 0 && 'rounded-bl-3xl',
              index === tabs.length - 1 && 'rounded-tr-3xl',
              openTab === index && 'border-dark bg-dark text-light'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENTS */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(openTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
