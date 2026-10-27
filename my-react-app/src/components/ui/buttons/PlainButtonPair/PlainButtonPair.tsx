import type { ReactElement } from 'react';
import PlainButton, { type PlainButtonProps } from '../PlainButton/PlainButton';
import './PlainButtonPair.css';

type PlainButtonElement = ReactElement<PlainButtonProps, typeof PlainButton>;

type PlainButtonPairProps = {
  children: [PlainButtonElement, PlainButtonElement];
};

function PlainButtonPair({ children }: PlainButtonPairProps) {
  return <div className="plain-button-pair">{children}</div>;
}

export default PlainButtonPair;
