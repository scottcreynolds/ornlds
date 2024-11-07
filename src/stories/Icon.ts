import { html } from "lit";
// import { kebabize } from "./helpers";

export interface IconProps {
    /** The icon name */
    icon: string;
    /** The icon size */
    size?: string;
    /** The icon color */
    color?: string;
    }

/** Primary UI component for user interaction */
export const Icon = ({ icon, size, color }: IconProps) => {
    const iconColor = color ? color : '#0F873D';
    const iconClass = 'ph-' + icon;
    const sizeClass = size ? 'ph-' + size : 'ph-large';
    let variantClass = 'ph';
    if (sizeClass === 'ph-small') {
        variantClass = 'ph-fill';
    }

    return html`
        <i
            class=${[variantClass, iconClass, sizeClass].join(' ')}
            style="color: ${iconColor};
                font-size: ${size == 'small' ? '16px' : '24px'};"
        ></i>
    `;
};