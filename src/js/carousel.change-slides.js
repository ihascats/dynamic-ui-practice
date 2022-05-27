/* eslint-disable comma-dangle */
function carousel() {
  const imageArray = [
    'https://images.alphacoders.com/943/thumb-1920-943148.jpg',
    'https://i.pinimg.com/originals/86/ff/b8/86ffb87572d657f335cd7cd828c70de3.jpg',
    'https://wallpaper.dog/large/20459082.jpg',
    'https://images2.alphacoders.com/109/1098024.png',
  ];

  const imageContainer = document.querySelector('.imageDisplay');

  const startingPosition = 800;

  function createImage(url) {
    const img = document.createElement('img');
    img.setAttribute('style', 'width: 800px; height: 450px;');
    img.src = url;
    return img;
  }

  function displayImages(array) {
    const imageElements = array;
    const div = document.createElement('div');
    imageElements.forEach((element) => {
      div.appendChild(element);
    });
    div.setAttribute('style', `right:-${startingPosition}px `);
    const firstChild = imageContainer.firstElementChild;
    if (firstChild && !firstChild.classList.contains('slideContainer')) {
      imageContainer.firstElementChild.remove();
    }
    imageContainer.prepend(div);
  }

  const arrayOfImageElements = imageArray.map(
    (item) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      createImage(item)
    // eslint-disable-next-line function-paren-newline
  );

  let position = 0;

  function getElements(previous, current, next, array) {
    const previousIndex = previous;
    const currentIndex = current;
    const nextIndex = next;
    const arrayOfIndex = [previousIndex, currentIndex, nextIndex];
    const arrayOfElements = array;
    const newArray = arrayOfIndex.map((item) => {
      let value = item;
      if (value < 0) {
        value = arrayOfElements.length + value;
      }
      if (value > arrayOfElements.length - 1) {
        position = -1;
        value = 0;
      }
      if (-position >= arrayOfElements.length - 1) {
        position = 1;
        value = 0;
      }
      return value;
    });

    return [
      arrayOfElements[newArray[0]],
      arrayOfElements[newArray[1]],
      arrayOfElements[newArray[2]],
    ];
  }

  function displayThreeImages(arrayOfImageElement) {
    const imageElements = arrayOfImageElement;
    const displayArray = getElements(
      position - 1,
      position,
      position + 1,
      imageElements
    );
    displayImages(displayArray);
  }

  displayThreeImages(arrayOfImageElements);

  const slidePosition = document.querySelector('.slidePosition');

  imageArray.forEach((item, pos) => {
    const button = document.createElement('button');
    button.classList.add(pos);
    if (pos === position) {
      button.classList.add('selected');
    }
    slidePosition.appendChild(button);
  });

  const posButtons = document.querySelectorAll('.slidePosition > button');

  let clicked = false;

  const leftButton = document.querySelector('.left');
  const rightButton = document.querySelector('.right');

  rightButton.onclick = () => {
    if (clicked) return;
    const currentSelected = document.querySelector('.selected').classList[0];
    let nextSelected = Number(currentSelected) + 1;
    if (nextSelected >= imageArray.length) {
      nextSelected = 0;
    }
    posButtons.forEach((element) => {
      const button = element;
      button.classList.remove('selected');
      if (button.classList.contains(nextSelected)) {
        button.classList.toggle('selected');
      }
    });
    clicked = true;
    const images = imageContainer.firstElementChild;
    images.style.right = 0;
    setTimeout(() => {
      position += 1;
      displayThreeImages(arrayOfImageElements);
      clicked = false;
    }, 1000);
  };

  leftButton.onclick = () => {
    if (clicked) return;
    const currentSelected = document.querySelector('.selected').classList[0];
    let nextSelected = Number(currentSelected) - 1;
    if (nextSelected < 0) {
      nextSelected = imageArray.length - 2 - nextSelected;
    }
    posButtons.forEach((element) => {
      const button = element;
      button.classList.remove('selected');
      if (button.classList.contains(nextSelected)) {
        button.classList.toggle('selected');
      }
    });
    clicked = true;
    const images = imageContainer.firstElementChild;
    images.style.right = `-${1600}px`;
    setTimeout(() => {
      position -= 1;
      displayThreeImages(arrayOfImageElements);
      clicked = false;
    }, 1000);
  };

  slidePosition.onclick = (event) => {
    if (clicked) return;
    const button = event.target.closest('button');
    if (!button || button === null) return;
    clicked = true;
    const selectedPosition = Number(button.classList[0]);
    displayImages(arrayOfImageElements);
    // eslint-disable-next-line operator-linebreak
    let currentPosition =
      800 - arrayOfImageElements.length * 800 + 800 * position;
    if (currentPosition === -arrayOfImageElements.length * 800) {
      currentPosition = 0;
    }
    // eslint-disable-next-line operator-linebreak
    const newPosition =
      800 - arrayOfImageElements.length * 800 + 800 * selectedPosition;
    position = selectedPosition;
    posButtons.forEach((element) => {
      element.classList.remove('selected');
      if (element.classList.contains(position)) {
        element.classList.toggle('selected');
      }
    });
    const div = imageContainer.firstElementChild;
    div.style.right = `${currentPosition}px`;
    setTimeout(() => {
      div.style.right = `${newPosition}px`;
    });
    setTimeout(() => {
      displayThreeImages(arrayOfImageElements);
      clicked = false;
    }, 1000);
  };
}

export default carousel;
