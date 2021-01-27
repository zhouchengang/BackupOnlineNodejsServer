var oss = require('ali-oss');

const client  = new oss({
  accessKeyId: 'LTAI4GKcVmjrhjCrFGPSK1Qt',
  accessKeySecret: 'Teuxxd8Futcyad7ZOOBqQiEj3emsLi',
  bucket: 'backupzcg',
  endpoint: 'https://oss-cn-hongkong.aliyuncs.com'
});

client.useBucket('backupzcg');
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
