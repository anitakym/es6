// 处理命令行参数的 gulp -production
// decribe 给人看的
import yargs from 'yargs'

const args = yargs

  .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  .option('watch',{
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  .option('verbose',{
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('sourcemap',{
    describe: 'force the creation of sourcemap'
  })

  .option('port',{
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv

export default args;  
