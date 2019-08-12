/**
 * Created by 7coder on 2017/12/14.
 */

const APPNAME = 'gy-html-manage'

const path = require('path')
const gulp = require('gulp')
// 图片压缩
// sftp上传
const scp = require('gulp-scp2')
// 把gulp的任务当作同步处理
const sequence = require('gulp-sequence')

const DIST_PATH = path.resolve(__dirname, './dist/')

gulp.task('deploy', () => {
  let dest = `/data/deploy/${APPNAME}`
  return gulp.src(path.join(DIST_PATH, '\**'))
    .pipe(scp({
      host: '129.204.80.147',
      username: 'oper',
      password: 'yunchOper@dk23K2#11L2&dx',
      port: 22,
      dest: dest,
      watch: client => {
        client.on('write', o => {
          console.log(`正在上传文件:${o.destination}`)
        });
      }
    }))
    .on('error', err => {
      console.log(err)
    })
})
gulp.task('deployD', () => {
  let dest = `/data/deploy/${APPNAME}`
  return gulp.src(path.join(DIST_PATH, '\**'))
    .pipe(scp({
      host: '47.97.179.239',
      username: 'oper',
      password: 'yunchOper@dk23K2#11L2&dx',
      port: 2001,
      dest: dest,
      watch: client => {
        client.on('write', o => {
          console.log(`正在上传文件:${o.destination}`)
        });
      }
    }))
    .on('error', err => {
      console.log(err)
    })
})

gulp.task('default', sequence('deploy',() => {
  console.log('上传完成')
}))
