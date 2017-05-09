var GITHUB_USER = "tindang17";
var GITHUB_TOKEN = "6a0520dbf4c3598b8a1c40620e913c22cd4b9731";


var request = require('request');
// var fs = require('fs')


function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+GITHUB_USER+':'+GITHUB_TOKEN +'@api.github.com/repos/'+repoOwner+'/'+repoName +'/contributors';

var obj = {
  url: requestURL,
  headers: {
    'User-Agent': 'Lighthouse Project'
  }
};



  request.get(obj, function(err, response, body) {
    // if (err) throw err;
    console.log(JSON.parse(body));
  });
}













//---------------------------------------------------------------//
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// };

  // console.log(requestURL)
//   request.get(requestURL)
        // ('error', function(err) {
        //   throw err;
        //   })
        // ('body', function(body) {
        //   body
        // });
        // body.json