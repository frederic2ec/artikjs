export function getJSON(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);

  return new Promise((resolve, reject) => {
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          const response = JSON.parse(this.responseText);
          const status = this.status;
          resolve({ status, response });
        } else {
          const response = JSON.parse(this.responseText);
          const status = this.status;
          reject({ status, response });
        }
      }
    };
    request.send();
    request = null;
  });
}
