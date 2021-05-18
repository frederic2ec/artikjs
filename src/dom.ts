function dom(selector: any) {
  const self = {
    element: document.querySelector(selector),   
    documentElement: document.documentElement,
    html: (arg: string) => {
     arg ? self.element.innerHTML = arg : self.element.innerHTML
    },
    on: (...args: any[]) => {
      let callback: Function = args.pop()
      args = args.slice(0, -1)
      args.forEach(arg => {
        self.element.addEventListener(arg, callback)
      })
    },
    off: (...args: any[]) => {
      let callback: any = args.pop()
      args = args.slice(0, -1)
      args.forEach(arg => {
        self.element.removeEventListener(arg, callback)
      })
    },
    hide: () => self.element.style.display = "none",
    keyup: () =>  self.element.onkeyup,
    val: (arg: string) => {
      arg ? self.element.value = arg : self.element.value
    },
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
    getAttribute: (attr: string) => self.element.getAttribute(attr),
    getAttributeNode: (attr: string) => self.element.getAttributeNode(attr),
    hasAttribute: (attr: string) => self.element.hasAttribute(attr),
    hasChildNodes: () => self.element.hasChildNodes(),
    hasAttributes: () => self.element.hasAttributes(),
    id: () => self.element.id,
    text: () => self.element.innerText,
    insertAdjacentElement: (pos: string, element: string) => self.element.insertAdjacentElement(pos, element),
    insertAdjancentHTML: (pos: string, text: string) => self.element.insertAdjancentHTML(pos, text),
    insertAdjancentText: (pos: string, text: string) => self.element.insertAdjancentText(pos, text),
    isContentEditable: () => self.element.isContentEditable,
    isSameNode: (item: string) => self.element.isSameNode(item),
    lang: () => self.element.lang,
    lastChild: () => self.element.lastChild,
    lastElementChild: () => self.element.lastElementChild,
    matches: (...args: any) => self.element.matches(args),
    namespaceURI: () => self.element.namespaceURI,
    nextSibling: () => self.element.nextSibling,
    nextElementSibling: () => self.element.nextElementSibling,
    nodeName: () => self.element.nodeName,
    nodeType: () => self.element.nodeType,
    nodeValue: () => self.element.nodeValue,
    normalize: () => self.element.normalize,
    offsetHeight: () => self.element.offsetHeight,
    offsetWidth: () => self.element.offsetWidth,
    offsetLeft: () => self.element.offsetLeft,
    offsetParent: () => self.element.offsetParent,
    offsetTop: () => self.element.offsetTop,
    oHtml: () => self.element.outerHTML,
    outerText: () => self.element.outerText,
    ownerDocument: () => self.element.ownerDocument,
    parentNode: () => self.element.parentNode,
    parentElement: () => self.element.parentElement,
    previousSibling: () => self.element.previousSibling,
    previousElementSibling: () => self.element.previousElementSibling,
    removeAttribute: (attr: string) => self.element.removeAttribute(attr),
    removeAttributeChildNode: (attributenode: string) => self.element.removeAttributeChildNode(attributenode),
    removeChild: (node: string) => self.element.removeChild(node),
    replaceChild: (node: string, nnode: string) => self.element.replaceChild(node, nnode),
    requestFullScreen: () => self.element.requestFullScreen(),
    scrollHeight: () => self.element.scrollHeight,
    scrollIntoView: () => self.element.scrollIntoView,
    scrollLeft: () => self.element.scrollLeft,
    scrollTop: () => self.element.scrollTop,
    scrollWidth: (alignto: string) => self.element.scrollIntoView(alignto),
    setAttributeNode: (attrNode: string) => self.element.setAttributeNode(attrNode),
    tabIndex: () => self.element.tabIndex,
    tagName: () => self.element.tagName,
    textContent: () => self.element.textContent,
    title: () => self.element.title,
  };
  return self;
}

export default dom;




