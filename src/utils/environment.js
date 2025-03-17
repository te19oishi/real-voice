// src/utils/environment.js
export const isPreviewEnvironment = () => {
    if (typeof import.meta.env !== 'undefined') {
        return import.meta.env.DEV || (typeof window !== 'undefined' && window.location.hostname.includes("preview"));
    }
    return false;
};