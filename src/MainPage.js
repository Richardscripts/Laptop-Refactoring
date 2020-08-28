import React from 'react';

import MainForm from './MainForm';
import MainSummary from './MainSummary';

export default function MainPage({ selected, updateFeature }) {
  return (
    <main>
      <MainForm selected={selected} updateFeature={updateFeature} />
      <MainSummary selected={selected} />
    </main>
  );
}
