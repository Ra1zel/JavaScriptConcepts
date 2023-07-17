// Get query parameters from URL
function getQueryParams(url) {
    var queryParams = {};
    var queryString = url.split("?")[1];
  
    if (queryString) {
      var pairs = queryString.split("&");
  
      pairs.forEach(function(pair) {
        var keyValue = pair.split("=");
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        queryParams[key] = value;
      });
    }
  
    return queryParams;
  }
  
  // Example usage
  var url = "https://example.com/page?name=John&age=30&city=New+York";
  var params = getQueryParams(url);
  
  console.log(params);
  console.log(params.name); // Output: John
  console.log(params.age); // Output: 30
  console.log(params.city); // Output: New York
  