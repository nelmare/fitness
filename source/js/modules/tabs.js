export const showTabs = () => {
  const menuElements = document.querySelectorAll('[data-tab]');
  // const targetElements = document.querySelectorAll('[data-target]');

  // /*
  // Этот код позволяет открывать содержание скрытых табов при нажатии на карточку страны. Ссылки-якоря переносят на
  // нужное место, но не открывают содержание табов
  // */
  // for (let i = 0; i < targetElements.length; i++) {
  //   targetElements[i].addEventListener('click', () => {
  //     const tabName = targetElements[i].getAttribute('data-target');
  //     document.getElementById(tabName + '-tab').click();
  //   });
  // }

  const clearCurrentElements = () => {
    for(let i=0; i<menuElements.length; i++) {
      menuElements[i].classList.remove('current');
      const id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('current');
    }
  }

  const onCurrentLinkChange = (evt) => {
    evt.preventDefault();
    clearCurrentElements();
    evt.target.classList.add('current');
    const id = evt.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('current');
  };

  const tabsChange = () => {
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', onCurrentLinkChange);
    }
  };

  tabsChange();
};

// showTabs();
