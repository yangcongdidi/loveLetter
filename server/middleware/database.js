const mongoose =require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/loveLetter', { useMongoClient: true })
  .then(() => {
    console.log('成功连接到数据库！');
  })
  .catch((error) => {
    console.error('连接数据库时出现错误：', error);
  });



module.exports = mongoose