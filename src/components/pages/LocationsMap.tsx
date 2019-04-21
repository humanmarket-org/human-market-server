import * as React from 'react';
import th from './LocationsMap.sass';

import {
  List, Avatar, Button, Checkbox, Skeleton,
} from 'antd';
const CheckboxGroup = Checkbox.Group;

const data = [
  {
    name: 'SuperBar',
    url: '/lugares/gastronomicos/superbar',
    description: 'Tienen alcohol y comida vegana, qué más necesitás?',
    type: 'bar',
    lat: '-38.014032',
    lng: '-57.5563694',
    priceRange: '$',
    thumbnail: null,
    menuItems: [
      {name: 'Veggie Burger', thumbnail: null, price: 22},
      {name: 'Super Veggie Burger', thumbnail: null, price: 60}
    ]
  },
  {
    name: 'Mega Café',
    description: 'Un café copado',
    type: 'cafe',
    url: '/lugares/gastronomicos/megacafe',
    lat: '-38.0093321',
    lng: '-57.5624204',
    priceRange: '$$',
    thumbnail: null,
    menuItems: [
      {name: 'Latte', thumbnail: null, price: 150}
    ]
  },
  {
    name: 'Gourmet Restaurant',
    description: 'Un restaurante para disfrutar toda la mejor comida.',
    url: '/lugares/gastronomicos/gourmetrestaurant',
    type: 'restaurant',
    lat: '-38.0181569',
    lng: '-57.5631071',
    priceRange: '$$$',
    thumbnail: null,
    menuItems: [
      {name: 'Gourmet Meal', thumbnail: null, price: 999},
      {name: 'Mega Gourmet Meal', thumbnail: null, price: 999}
    ]
  },
];

interface LocationsMapProps {

}

function locationByType (type: string) {
  return data.filter((d) => d.type === type);
}

function item () {

}

export default function LocationMap(props: LocationsMapProps) {
  return (
    <div className='LocationsMap'>
      <div className='filter'>
        [Checkboxes to filter by restaurant/café/gourmet stuff/bar price ranges, number of options, full-veganism, etc]
      </div>
      <div className='map'>
        [Actual search results in a map]
      </div>
      <List
        className='list'
        loading={false}
        itemLayout='horizontal'
        loadMore={() => {}}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>Localizar</a>]}>
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={<Avatar src={item.thumbnail || '/images/place-placeholder.jpg'} />}
                title={<a href={item.url}>{item.name}</a>}
                description={<span><strong>{item.priceRange} </strong>{item.description}</span>}
              />
              <div className={th.foodList}>
                {item.menuItems.map((menuItem) =>
                  <img
                    src={menuItem.thumbnail || '/images/menu-item-placeholder.jpg'}
                    title={`${menuItem.name} ---- $${menuItem.price}`}
                    />
                )}
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
    </div>
  );
}
