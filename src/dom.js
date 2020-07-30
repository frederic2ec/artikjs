function dom(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element.innerHTML,
    on: (event, callback) => {
      self.element.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
  };
  return self;
}

export default dom;
