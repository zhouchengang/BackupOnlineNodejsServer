var oss = require('ali-oss');

var store = oss({
  accessKeyId: 'LTAI4G1QUQQJC2dHuvVfoq21',
  accessKeySecret: 'z5fPIHRvzFoTHrJyfHDRfXE10jNxqI',
  bucket: 'backupzcg',
  region: 'oss-cn-hongkong'
});

//client.useBucket('backupzcg');
//let signUrl = store.signatureUrl('xxx.jpg', {expires: 60, 'process' : 'style/jpg'});
//console.log("signUrl="+signUrl);

async function list () {
  try {
    let result = await client.list({
      'max-keys': 5
    })
    console.log(result)
  } catch (err) {
    console.log (err)
  }
}
list();
