import { html } from 'lit';

import '../shared.css';
import './linklist.css';

export interface LinkListItemProps {
  link?: string;
  label?: string;
  onClick?: () => void;
}

export const LinkListItem = ({ link, label, onClick }: LinkListItemProps) => {

  return html`
    ${link ? html`<a class="ornl-linklist--item" href=${link}>${label}</a>` : html`<button class="ornl-linklist--item" @click=${onClick}>${label}</button>`}
  `;
};
