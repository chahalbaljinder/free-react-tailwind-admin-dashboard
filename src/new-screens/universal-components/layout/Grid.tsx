import React from 'react';

export interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = 'md',
  responsive,
  className = ''
}) => {
  const baseClasses = 'grid';
  
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
  };

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  let responsiveClasses = '';
  if (responsive) {
    if (responsive.sm) responsiveClasses += ` sm:grid-cols-${responsive.sm}`;
    if (responsive.md) responsiveClasses += ` md:grid-cols-${responsive.md}`;
    if (responsive.lg) responsiveClasses += ` lg:grid-cols-${responsive.lg}`;
    if (responsive.xl) responsiveClasses += ` xl:grid-cols-${responsive.xl}`;
  }

  return (
    <div className={`${baseClasses} ${colsClasses[cols]} ${gapClasses[gap]}${responsiveClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;