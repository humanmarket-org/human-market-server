import * as React from 'react';

interface MarketSearchProps {

}

export default function MarketSearch(props: MarketSearchProps) {
  return (
    <div className='MarketSearch'>
      <div className='filters'>
        Filter down your search
      </div>
      <div className='results'>
        Actual search results
      </div>
    </div>
  );
}
