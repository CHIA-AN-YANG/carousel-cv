import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';

export const enum GtmEventNames {
  PAGE_VIEW = 'page_view',
  LOOK_FURTHER = 'look_further',
  CHAT = 'chat',
  NAVIGATION = 'navigation',
}
export const trackGtmEvent = (eventName: GtmEventNames, customParams: { [x: string]: string }) => {

  if (typeof window !== 'undefined') {
    const params = {
      device: isMobile() ? 'mobile' : 'desktop',
      ...customParams,
    };
    sendGAEvent({
      'event': eventName,
      ...params
    });
    console.info(`*** GA Event: ${eventName}`, JSON.stringify(params));
  }
};

const isMobile = () => {
  return window.innerWidth <= 768;
};