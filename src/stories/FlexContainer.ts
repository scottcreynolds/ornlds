import { html, css,  unsafeCSS, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';

export interface FlexContainerProps {
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

@customElement('flex-container')
    export class FlexContainer extends LitElement {
        static styles = css`
            :host {
                display: flex;
                width: 100%;
            }
        `;
        @property({ type: String }) alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
        @property({ type: String }) flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        @property({ type: String }) justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

        override render() {
            const styles = {
                alignItems: this.alignItems ? this.alignItems : 'stretch',
                flexDirection: this.flexDirection ? this.flexDirection : 'row',
                justifyContent: this.justifyContent ? this.justifyContent : 'flex-start',
            };

            return html`
                <div style="${styleMap(styles)}">
                    <p>FlexContainer</p>
                    <slot></slot>
                </div>
            `;
        }
    }

    declare global {
        interface HTMLElementTagNameMap {
            'flex-container': FlexContainer;
        }
    }


    



// export const FlexContainer = ({alignItems, flexDirection, justifyContent}: FlexContainerProps) => {
    
    // styles = {
    //     alignItems: alignItems ? this.alignItems : 'stretch',

    // }
    // const styles = {
    //     display: 'flex',
    //     width: '100%',
    //     alignItems: alignItems ? alignItems : 'stretch',
    //     flexDirection: flexDirection ? flexDirection : 'row',
    //     justifyContent: justifyContent ? justifyContent : 'flex-start',
    // };

    // css`
    //     :host {
    //         display: flex;
    //         width: 100%;
    //         align-items: ${unsafeCSS(styles.alignItems)};
    //         flex-direction: ${unsafeCSS(styles.flexDirection)};
    //         justify-content: ${unsafeCSS(styles.justifyContent)};
    //     }
    // `;
    
//     return html`
//         <div style="${styleMap(styles)}">
//             <p>FlexContainer</p>
//             <slot></slot>
//         </div>
// `};


