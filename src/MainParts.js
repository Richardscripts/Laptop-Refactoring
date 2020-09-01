import React from 'react';
import slugify from 'slugify';
import MainSpecs from './MainSpecs';
import MainButtons from './MainButtons';

export default function MainParts({ updateFeature, parts }) {
  const features = Object.keys(parts).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = parts[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <MainButtons
          key={itemHash}
          feature={feature}
          itemHash={itemHash}
          updateFeature={updateFeature}
          item={item}
        />
      );
    });
    return (
      <MainSpecs
        key={idx}
        featureHash={featureHash}
        feature={feature}
        options={options}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
