function makeLink(text = 'ERROR', appendTo = '') {
  const a = document.createElement('a');
  const li = document.createElement('li');
  li.textContent = text;
  a.appendChild(li);
  a.setAttribute('href', '#');
  appendTo.insertBefore(a, appendTo.firstElementChild);
}

function displayItems(toDisplay, tabElement, tabDropDown) {
  const links = toDisplay;
  const moreTabElement = tabElement;
  const moreTabDropDown = tabDropDown;
  const numberOfChildren = Math.floor(window.innerWidth / 128);
  if (window.innerWidth > (numberOfChildren + 1) * 128) return;
  const moveChildren = links.length - (numberOfChildren - 2);
  while (moreTabElement.childElementCount > 1) {
    moreTabElement.firstChild.remove();
  }
  while (moreTabDropDown.childElementCount > 1) {
    moreTabDropDown.firstChild.remove();
  }
  links.forEach((value, index) => {
    if (index >= moveChildren) {
      makeLink(value, moreTabElement);
    }
    if (index < moveChildren) {
      makeLink(value, moreTabDropDown);
    }
  });
}

function moreTab() {
  const moreTabElement = document.querySelector('.moreTab');
  const moreTabDropDown = document.querySelector(
    // eslint-disable-next-line comma-dangle
    '.moreTab > div > .dropDownMenu'
  );

  const links = [
    'NEWS',
    'VIDEOS',
    'PHOTOS',
    'CHAT',
    'STATISTICS',
    'SETTINGS',
    'ABOUT',
  ];

  links.reverse().forEach((link) => {
    makeLink(link, moreTabElement);
  });

  window.onload = () => {
    displayItems(links, moreTabElement, moreTabDropDown);
  };

  window.onresize = () => {
    displayItems(links, moreTabElement, moreTabDropDown);
  };
}

export default moreTab;
