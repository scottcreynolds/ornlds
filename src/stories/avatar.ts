import { html } from 'lit';

import '../shared.css';
import './avatar.css';

export interface AvatarProps {
  /** The avatar image url */
  imageUrl?: string;
  /** The avatar label */
  altTag?: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Avatar = ({ imageUrl, altTag, onClick }: AvatarProps) => {

  return html`
    <div
      class="ornl-avatar"
      @click=${onClick}
    >
      <img src=${imageUrl} alt=${altTag} />
    </div>
  `;
};
