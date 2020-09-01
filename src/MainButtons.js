import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './currencyFormat';

export default function MainButtons({ itemHash, item, feature, updateFeature}) {
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        onChange={(e) => updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
}
