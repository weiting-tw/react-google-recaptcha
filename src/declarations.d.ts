declare module '@a26007565/react-google-recaptcha' {
    import { Component } from 'react';

    // 定義組件的 PropTypes
    export interface ReCAPTCHAProps {
        sitekey: string; // 必填
        onChange?: (token: string | null) => void; // 可選回調
        grecaptcha?: object; // 可選
        theme?: 'dark' | 'light'; // 可選
        type?: 'image' | 'audio'; // 可選
        tabindex?: number; // 可選
        onExpired?: () => void; // 可選回調
        onErrored?: () => void; // 可選回調
        size?: 'compact' | 'normal' | 'invisible'; // 可選
        stoken?: string; // 可選
        hl?: string; // 可選
        badge?: 'bottomright' | 'bottomleft' | 'inline'; // 可選
        isolated?: boolean; // 可選
        [key: string]: any; // 允許其他屬性
    }

    // 定義 ReCAPTCHA 組件
    export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
}
