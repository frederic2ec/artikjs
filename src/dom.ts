function dom(selector: any) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element.innerHTML,
    on: (event: string, callback: any) => {
      self.element.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
    keyup: () =>  self.element.onkeyup,
    val: () => self.element.value,
    setAttribute: (attr: string, String: string) => self.element.setAttribute(attr, String),
    getNamedItem: (nodename: any) => self.element.getNamedItem(nodename),
    aKey: () => self.element.accessKey,
    attr: () => self.element.attributes,
    blur: () => self.element.blur(),
    childElCount: () => self.element.childElementCount,
    clist: () => self.element.classList,
    click: () => self.element.click(),
    clientHeight: () => self.element.clientHeight,
    clientLeft: () => self.element.clientLeft,
    clientTop: () => self.element.clientTop,
    clientWidth: () => self.element.clientWidth,
    cloneNode: () => self.element.cloneNode,
    closest: () => self.element.closest,
    contains: (arg: any) => self.element.contains(arg),
    contentEditTable: () => self.element.contentEditTable,
    dir: () => self.element.dir,
    exitFullscreen: () => self.element.exitFullscreen(),
    firstChild: () => self.element.firstChild(),
    firstElementChild: () => self.element.firstElementChild,
    focus: () => self.element.focus(),
    getAttribute: (attr: any) => self.element.getAttribute(attr),

    


    
  };
  return self;
}

export default dom;




