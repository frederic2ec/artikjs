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
    keyup: () =>  self.element.onkeyup,
    val: () => self.element.value,
    setAttribute: (attr, String) => self.element.setAttribute(attr, String),

  };
  return self;
}

export default dom;
