import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';

export const enum GtmEventNames {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  FORM_SUBMIT = 'form_submit',
  NAVIGATION = 'navigation',
}
export const trackGtmEvent = (eventName: GtmEventNames, customParams: { [x: string]: string }) => {

  if (typeof window !== 'undefined') {
    const params = {
      device: isMobile() ? 'mobile' : 'desktop',
      ...customParams,
    };
    sendGAEvent({
      'event': `ga-${eventName}`,
      ...params
    });
    sendGTMEvent({ 'event': eventName, params });
    console.info(`*** GTM Event: ${eventName}`, JSON.stringify(params));
  }
};

const isMobile = () => {
  return window.innerWidth <= 768;
};