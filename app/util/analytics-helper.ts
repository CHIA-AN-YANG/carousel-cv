import { sendGTMEvent } from '@next/third-parties/google';

export const enum GtmEventNames {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  FORM_SUBMIT = 'form_submit',
  NAVIGATION = 'navigation',
}
export const trackGtmEvent = (eventName: GtmEventNames, customParams: { [x: string]: string }) => {

  if (typeof window !== 'undefined' && window.gtag) {
    const params = {
      device: isMobile() ? 'mobile' : 'desktop',
      ...customParams,
    };
    // sendGAEvent('event', eventName, {
    //   'event': eventName,
    //   ...params
    // });
    sendGTMEvent({ 'event': eventName, ...params });
  }
};

const isMobile = () => {
  return window.innerWidth <= 768;
};