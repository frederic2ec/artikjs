function $(selector : string) {
  const self = {
    element: document.querySelector(selector),
    on: (...args: any[]) => {
      let callback: any = args.pop()
      let handlers: any = args.slice(0, -1) 
      handlers.forEach((arg: any) => {
        self.element.addEventListener(arg, callback)
      })
    }
  }
  return self; 
}



