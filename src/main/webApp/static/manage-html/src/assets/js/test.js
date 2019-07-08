
// 查询试卷管理列表(分页查询)
import app from "../../main";

function BatchStatus () {

  this.name = 1
  this.age =  1
  this.submit =  () => app.$ajax('/paper/addQPaperInfo.do', {})
}
let batchStatus = new BatchStatus()
batchStatus.name = 2
batchStatus.submit()
