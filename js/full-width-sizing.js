function fullWidthSizing() {
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.querySelector('body').style.width = `calc(100vw - ${scrollbarWidth}px)`;
    document.querySelector('html').style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }

fullWidthSizing();
