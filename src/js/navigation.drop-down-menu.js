function dropDownMenu() {
  const buttons = document.querySelectorAll('.dropDownButton');

  buttons.forEach((element) => {
    const button = element;
    button.onmouseover = () => {
      let onAnimated = false;
      const animated = button.nextElementSibling;
      animated.onanimationend = () => {
        animated.classList.toggle('animated');
      };
      button.onmouseleave = () => {
        onAnimated = false;
        setTimeout(() => {
          if (!animated.classList.contains('animated') && !onAnimated) {
            animated.classList.toggle('animated');
          }
        }, '200');
      };
      animated.onmouseover = () => {
        onAnimated = true;
        animated.onmouseleave = () => {
          animated.classList.toggle('animated');
        };
      };
    };
  });
}

export default dropDownMenu;
