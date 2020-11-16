/**
 * 
 * 项目配置详情
*/
const conf = require('./config/projectConfig');
module.exports = {
  outputDir: conf.outputDir,
  pages: conf.pages,
  lintOnSave: false,
  devServer: {
    open: true
  }
};
