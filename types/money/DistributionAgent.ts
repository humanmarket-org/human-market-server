import Money from './Money';

export type MapArea = {
  nodes: {lat: number, lng: number}[];
}

export default class DistributionAgent {
  title: string;
  type: 'pickup' | 'store' | 'glovo'
  price: Money;
  serviceArea: MapArea;
}
