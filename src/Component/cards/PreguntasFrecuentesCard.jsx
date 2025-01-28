import React, { useState } from 'react';
import Icon from '@/utils/Icon'

export default function PreguntasFrecuentesCard({ question, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card ${isOpen ? 'open' : ''}`}>
      <div className="header" onClick={toggleCard}>
        <Icon icon={isOpen ? 'faMinus' : 'faPlus'} />
        <h4>{question}</h4>
      </div>
      {isOpen && <>
        <hr />
        <div className="content">{content}</div>
      </>}
    </div>
  );
}
