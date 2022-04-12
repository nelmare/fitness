import {showTabs} from './modules/tabs';
import {shadowTextFill} from './modules/shadow-fill';
import {addTrainersSwiper} from './vendor/trainers-swiper';
import {addReviewsSwiper} from './vendor/reviews-swiper';
import {anchorsScroll} from './modules/anchors-scroll';
import {validateForm} from './modules/form';
import {userPhoneMaskFill} from './vendor/phone-mask';
import {iosVhFix} from './utils/ios-vh-fix';
import {setupVideo} from './modules/video';
// import {initAccordion} from './modules/init-accordion';
// import {initModals} from './modules/modals/init-modals';
// import {onIntroButtonContentSet, changeIntroButtonContent} from './modules/button-content';
// import {showText} from './modules/text-show';
// import {onCardsHeadingContentSet, changeCardsHeadingContent} from './modules/cards-heading';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  showTabs();
  shadowTextFill();
  addTrainersSwiper();
  addReviewsSwiper();
  anchorsScroll();
  validateForm();
  userPhoneMaskFill();
  setupVideo();
  // initAccordion();
  // initModals();
  // onIntroButtonContentSet();
  // changeIntroButtonContent();
  // onCardsHeadingContentSet();
  // changeCardsHeadingContent();
  // showText();
});
