var oss = require('ali-oss');

const client  = new oss({
  accessKeyId: 'LTAI4GEBqghJsjehciQKfSzu',
  accessKeySecret: 'KoP7tPbfjNYZ2cjNaIOiyx3f1tsUhA',
  bucket: 'backupzcg',
  endpoint: 'https://oss-cn-hongkong-internal.aliyuncs.com'
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



async function get () {
  try {
    let result = await client.get('xxx.jpg');
    console.log(result);
  } catch (err) {
    console.log (err);
  }
}

get();
