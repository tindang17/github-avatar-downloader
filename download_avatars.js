var GITHUB_USER = "tindang17";
var GITHUB_TOKEN = "6a0520dbf4c3598b8a1c40620e913c22cd4b9731";


var request = require('request');


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+GITHUB_USER+':'+GITHUB_TOKEN +'@api.github.com/repos/'+repoOwner+'/'+repoName +'/contributors';
  console.log(requestURL)
  request.get(requestURL)
}
  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });