var oss = require('ali-oss');

const store = new oss({
  accessKeyId: 'LTAI4G1QUQQJC2dHuvVfoq21',
  accessKeySecret: 'z5fPIHRvzFoTHrJyfHDRfXE10jNxqI',
  bucket: 'backupzcg',
  endpoint: 'https://oss-cn-hongkong.aliyuncs.com'
});

//client.useBucket('backupzcg');
let signUrl = store.signatureUrl('xxx.jpg', {expires: 60, 'process' : 'style/jpg'});
console.log("signUrl="+signUrl);
