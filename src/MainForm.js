import React from 'react';
import MainParts from './MainParts';
import FEATURES from './FEATURES';

export default function MainForm({ updateFeature }) {
  return (
    <MainParts
      parts={FEATURES}
      updateFeature={updateFeature}
    />
  );
}
