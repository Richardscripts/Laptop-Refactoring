import React from 'react';

import MainForm from './MainForm';
import MainSummary from './MainSummary';

export default function MainPage(props) {
  return (
    <main>
      <MainForm selected={props.selected} updateFeature={props.updateFeature}/>
      <MainSummary selected={props.selected} />
    </main>
  )
}