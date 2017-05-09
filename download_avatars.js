var GITHUB_USER = 'tindang17';
var GITHUB_TOKEN = '6a0520dbf4c3598b8a1c40620e913c22cd4b9731';


var request = require('request');
var fs = require('fs');

//----------------------------------------------------------------//

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+GITHUB_USER+':'+GITHUB_TOKEN +'@api.github.com/repos/'+repoOwner+'/'+repoName +'/contributors';

  var obj = {
    url: requestURL,
    headers: {
      'User-Agent': 'Lighthouse Project'
    }
  };

  request.get(obj, function(err, response, body) {
    var contributors = JSON.parse(body);
    contributors.forEach(function(item) {
      downloadImageByURL(item.avatar_url, `./avatars/${item.login}.jpg`)
    })
  });
}

//---------------------------------------------------------------//

function downloadImageByURL(url, filePath) {
  request.get(url)
        .on('error', function(err){
          throw error;
        })
        .on('data', function(data){})
        .pipe(fs.createWriteStream(filePath));
  console.log('download is completed')
}

//---------------------------------------------------------------//

var repoOwner = process.argv[2];
var repoName = process.argv[3];
if (!repoOwner || !repoName) {
  console.log('Please provide the repo detail!');
} else {
  getRepoContributors(repoOwner, repoName, function(err, result) {});
}






