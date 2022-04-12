// const prices = document.querySelectorAll('[data-price]');
const tabsContentCards = document.querySelectorAll('[data-tabcard]');
// const textShadow = document.querySelectorAll('.tabs__text-shadow');

// export const shadowTextFill = () => {
//   prices.forEach((price) => {
//     const textShadow = '<p class="tabs__text-shadow">`${price.textContent}`</p>';
//     // textShadow.textContent = price.textContent;
//     tabsContentCard.insertAdjacentHTML('beforeend', textShadow);
//
//     // const text = price.textContent;
//     // textShadow.textContent = text;
//   });
// };


export const shadowTextFill = () => {
  tabsContentCards.forEach((tabsContentCard) => {
    const price = tabsContentCard.querySelector('[data-price]');
    const text = price.textContent;
    let textShadow = `<p class="tabs__text-shadow">${text}</p>`;
    tabsContentCard.insertAdjacentHTML('beforeend', textShadow);
  });
};
  // prices.forEach((price) => {

    // textShadow.textContent = price.textContent;


    // const text = price.textContent;
    // textShadow.textContent = text;
  // });
// };
