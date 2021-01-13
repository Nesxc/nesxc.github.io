const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===================================================================
　　
                  正在编译中.......请等待..........           
  　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                   本程序基于butterfly ${version}     
          项目地址：https://github.com/Nesxc/blog.github.io                  
  ===================================================================`)
})
