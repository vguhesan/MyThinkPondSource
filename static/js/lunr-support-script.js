function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/lunr.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
    });
    return actual_JSON;
}

var idx;

jQuery(document).ready(function($) {
    data = init();

    idx = lunr(function () {
      this.ref('name')
      this.field('text')

      documents.forEach(function (doc) {
        this.add(doc)
      }, this)
    });
    
});
