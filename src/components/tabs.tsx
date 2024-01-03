import { useState } from 'react';
import { Feature } from '../definitions';

function Tabs({ features }: { features: Feature[] }) {
  const [active, setActive] = useState(1);

  return (
    <div className="tabs">
      <div
        role="tablist"
        aria-labelledby="features-label"
        aria-orientation="vertical"
      >
        {features.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            id={`fl-${id}`}
            aria-controls={`fp-${id}`}
            aria-selected={id === active}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {features.map(({ id, image, title, description }) => (
        <div
          key={id}
          role="tabpanel"
          id={`fp-${id}`}
          aria-labelledby={`fl-${id}`}
          hidden={id !== active}
        >
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
