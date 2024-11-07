import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LinkListItem } from "./LinkListItem";

@customElement('link-list')
export class LinkList extends LitElement {
    @property({ type: String }) direction: 'row' | 'column' = 'row';

    static styles = css`
        :host {
            display: flex;
            flex-direction: var(--link-list-direction, row);
        }
    `;

    render() {
        return html`<div class="ornl-linklist"<slot></slot></div>`;
    }
}



// import { html } from 'lit';

// import '../shared.css';
// import './linklist.css';

// export interface LinkListProps {
//     direction: 'row' | 'column';
// }

// export const LinkList = ({ direction }: LinkListProps) => html`
//     <div class="ornl-linklist" style="display: flex; flex-direction: ${direction};"></div>`;