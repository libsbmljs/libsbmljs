var Module = {
  _main: function () {
    this.callbacks.forEach(function(e) {
      e.apply(this);
    });
    initialized = true;
  },
  onload: function(callback) {
    this.callbacks.push(callback);
    if(initialized) {
      callback.apply(this);
    }
  },
  load: function(url, callback) {
    this.onload(function() {
      var request = new XMLHttpRequest();
      var result = {
        ready: false,
  //       text: '',
        doc: null,
        error: false
      };

//       var libsbml = this;

      // GET is problematic for Firefox here when load is called
      // twice with the same url
      request.open('post', url, true);
      request.responseType = 'text';
      request.onload = function(e) {
//         console.log('async loaded model ' + url);
//         console.log('status ' + String(request.status));
        if((request.status==200 || request.status==0) && request.response) {
  //         console.log(request.response);
  //         result.text = request.response;

  //         console.log('pre sbml reader');
          reader = new Module.SBMLReader();
  //         console.log('post sbml reader');
          result.doc = reader.readSBMLFromString(request.response);
  //         console.log('post read sbml from str');
  //         Module.destroy(reader);

          if(result.doc.getNumErrors() > 0) {
            console.log('Invalid model: ' + url);
            result.error = true;
          }
  //         console.log('ready');
          result.ready = true;
          callback.apply(null, [result]);
        }
      };
      request.onerror = function(e) {
        console.log('Failed to load ' + url);
      };
      request.onprogress = function(e) {
        if(e.lengthComputable) {
          console.log(String(e.loaded));
        }
      };
  //     console.log('send req');
      request.send(null);
  //     console.log('post send req');
      return result;
    });
  },
  callbacks: [],
  initialized: false,
//   preInit: [function() { console.log('preInit'); }],
//   preRun: [function() { console.log('preRun'); }],
};

if(typeof(libsbmlMemoryInitPrefix) != 'undefined') {
  Module.memoryInitializerPrefixURL = libsbmlMemoryInitPrefix;
}
