function dom(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
    keyup: () => {
      self.element.onkeyup;
    },
    //attributes
    val: () => {
      self.element.value;
    },
    name: () =>{
      self.element.name;
    }
  };
  return self;
}

export default dom;
