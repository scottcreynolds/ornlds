import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import '../shared.css';
import './button.css';

export interface ButtonProps {
  /** Is this button primary, secondary, or tertiary? */
  mode?: 'primary' | 'secondary' | 'tertiary';
  /** Which color family does this belong to? */
  family?: 'brand' | 'neutral' | 'urgent';
  // /** What background color to use */
  // backgroundColor?: string; 
  /** How large should the button be? */
  size?: 'small' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Button = ({ mode, family, size, label, onClick }: ButtonProps) => {
  // const modeClass = 'ornl-button--' + (mode ? mode : 'primary');
  // const familyClass = 'ornl-button--' + (family ? family : 'brand');

  const colorClass = 'ornl-button--' + (family ? family : 'brand') +  '-' + (mode ? mode : 'primary');
  const sizeClass = 'ornl-button--' + (size ? size : 'large');

  return html`
    <button
      type="button"
      class=${['ornl-button', colorClass, sizeClass].join(' ')}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
