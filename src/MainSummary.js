import React from 'react';
import SummaryTotal from './SummaryTotal';
import SummaryOptions from './SummaryOptions';

export default function MainSummary({ selected }) {
  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <SummaryOptions
        key={idx}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal selected={selected} />
    </section>
  );
}
