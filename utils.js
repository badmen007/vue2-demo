
export function request (options) {
  const defaultOptions = {
    method: 'GET',
    baseUrl: 'http://localhost:8000',
    headers: {},
    data: {}
  }
  options = { ...defaultOptions, ...options, headers: { ...defaultOptions.headers, ...(options.headers || {}) } }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(options.method, options.baseUrl + options.url)
    for (const key in options.headers) {
      xhr.setRequestHeader(key, options.headers[key])
    }
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(xhr.response)
      }
    }
    xhr.send(options.data)
  })
}
