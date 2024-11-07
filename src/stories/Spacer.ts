import { LitElement, html, css } from 'lit';

export interface SpacerProps {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    backgroundColor?: string;
}

// apply the inputs from the SpacerProps interface to the Spacer function's root
const applySpacerProps = (props: SpacerProps) => {
  return {
    marginTop: props.marginTop || '0',
    marginBottom: props.marginBottom || '0',
    marginLeft: props.marginLeft || '0',
    marginRight: props.marginRight || '0',
    backgroundColor: props.backgroundColor || 'transparent',
  };
};


export const Spacer = ({ marginTop, marginBottom, marginLeft, marginRight, backgroundColor }: SpacerProps) => {
    return html`
        <div
            style="
                margin-top: ${marginTop};
                margin-bottom: ${marginBottom};
                margin-left: ${marginLeft};
                margin-right: ${marginRight};
                background-color: ${backgroundColor};
            "
        ></div>
    `;
}

// @customElement('ornl-spacer')
// export class Spacer extends LitElement {
//   @property({ type: String }) marginTop = 'auto';
//   @property({ type: String }) marginBottom = 'auto';
//   @property({ type: String }) marginLeft = 'auto';
//   @property({ type: String }) marginRight = 'auto';
//   // a background color property for testing
//   @property({ type: String }) backgroundColor = 'red';

//   static styles = css`
//     :host {
//       display: block;
//     }
//   `;

//   render() {
//     return html`
//       <div
//         style="
//           margin-top: ${this.marginTop};
//           margin-bottom: ${this.marginBottom};
//           margin-left: ${this.marginLeft};
//           margin-right: ${this.marginRight};
//           background-color: ${this.backgroundColor};
//         "
//       ></div>
//     `;
//   }
// }







// import { styleMap } from 'lit/directives/style-map.js';

// import '../shared.css';
// import './button.css';

// export interface ButtonProps {
//   /** Is this button primary, secondary, or tertiary? */
//   mode?: 'primary' | 'secondary' | 'tertiary';
//   /** Which color family does this belong to? */
//   family?: 'brand' | 'neutral' | 'urgent';
//   // /** What background color to use */
//   // backgroundColor?: string; 
//   /** How large should the button be? */
//   size?: 'small' | 'large';
//   /** Button contents */
//   label: string;
//   /** Optional click handler */
//   onClick?: () => void;
// }
// /** Primary UI component for user interaction */
// export const Button = ({ mode, family, size, label, onClick }: ButtonProps) => {
//   // const modeClass = 'ornl-button--' + (mode ? mode : 'primary');
//   // const familyClass = 'ornl-button--' + (family ? family : 'brand');

//   const colorClass = 'ornl-button--' + (family ? family : 'brand') +  '-' + (mode ? mode : 'primary');
//   const sizeClass = 'ornl-button--' + (size ? size : 'large');

//   return html`
//     <button
//       type="button"
//       class=${['ornl-button', colorClass, sizeClass].join(' ')}
//       @click=${onClick}
//     >
//       ${label}
//     </button>
//   `;
// };
