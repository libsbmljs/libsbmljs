Module['readSBMLFromURL'] = function(url) {
  // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        reader = new libsbml.SBMLReader()
        resolve(reader.readSBMLFromString(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      console.log('error',this.status);
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}
