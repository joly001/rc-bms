import app from '../main'

export default {
  // 查询试卷管理列表(分页查询)
  async queryQPaperManagePage (query) {
    return await app.$ajax({
      url: '/paper/queryQPaperManagePage.do',
      query
    })
  },

  // 新建试卷
  async addQPaperInfo (query) {
    return await app.$ajax({
      url: '/paper/addQPaperInfo.do',
      query
    })
  },

  // 更新试卷
  async updateQPaperInfo (query) {
    return await app.$ajax({
      url: '/paper/updateQPaperInfo.do',
      query
    })
  },

  // 试卷删除
  async delQPaperInfo (query) {
    return await app.$ajax({
      url: '/paper/delQPaperInfo.do',
      query
    })
  },

  // 获取试卷详情
  async getQPaperInfo (query) {
    return await app.$ajax({
      url: '/paper/getQPaperInfo.do',
      query
    })
  },

  // 考试批次新增
  async addBatch (query) {
    return await app.$ajax({
      url: '/rbatch/addBatch.do',
      query
    })
  },

  // 考试批次更新
  async updateBatch (query) {
    return await app.$ajax({
      url: '/rbatch/updateBatch.do',
      query
    })
  },

  // 考试批次禁用
  async disableBatch (query) {
    return await app.$ajax({
      url: '/rbatch/disableBatch.do',
      query
    })
  },

  // 考试批次启用
  async enableBatch (query) {
    return await app.$ajax({
      url: '/rbatch/enableBatch.do',
      query
    })
  },

  // 考试批次详情查询
  async getBatch (query) {
    return await app.$ajax({
      url: '/rbatch/getBatch.do',
      query
    })
  },

  // 考试批次列表分页查询
  async queryBatchPage (query) {
    return await app.$ajax({
      url: '/rbatch/queryBatchPage.do',
      query
    })
  },

  // 未分配的学生信息查询
  async getBatchResidueStudent (query) {
    return await app.$ajax({
      url: '/rbatch/getBatchResidueStudent.do',
      query
    })
  },

  // 考点列表分页查询
  async queryExamCentrePage (query) {
    return await app.$ajax({
      url: '/rbatch/queryExamCentrePage.do',
      query
    })
  },

  // 合作机构新增
  async addTrainInstitution (query) {
    return await app.$ajax({
      url: '/rinstitution/addTrainInstitution.do',
      query
    })
  },

  // 合作机构更新
  async updateTrainInstitution (query) {
    return await app.$ajax({
      url: '/rinstitution/updateTrainInstitution.do',
      query
    })
  },

  // 合作机构删除
  async deleteTrainInstitution (query) {
    return await app.$ajax({
      url: '/rinstitution/deleteTrainInstitution.do',
      query
    })
  },

  // 合作机构恢复
  async recoverTrainInstitution (query) {
    return await app.$ajax({
      url: '/rinstitution/recoverTrainInstitution.do',
      query
    })
  },

  // 合作机构列表查询
  async queryTrainInstitutionList (query) {
    return await app.$ajax({
      url: '/rinstitution/queryTrainInstitutionList.do',
      query
    })
  },

  // 合作机构列表分页查询
  async queryTrainInstitutionPage (query) {
    return await app.$ajax({
      url: '/rinstitution/queryTrainInstitutionPage.do',
      query
    })
  },

  // 合作机构详情查询
  async getTrainInstitution (query) {
    return await app.$ajax({
      url: '/rinstitution/getTrainInstitution.do',
      query
    })
  },

  // 查询角色列表
  async queryRoleList (query) {
    return await app.$ajax({
      url: '/role/queryRoleList.do',
      query
    })
  },

  // 查询角色权限列表
  async queryRoleElementList (query) {
    return await app.$ajax({
      url: '/role/queryRoleElementList.do',
      query
    })
  },

  // 登录
  async login (query) {
    return await app.$ajax({
      url: '/auth/login.do',
      query
    })
  },

  // 登出
  async logout (query) {
    return await app.$ajax({
      url: '/auth/logout.do',
      query
    })
  },

  // 发送验证码
  async sendVerifyCode (query) {
    return await app.$ajax({
      url: '/auth/sendVerifyCode.do',
      query
    })
  },

  // 找回密码
  async resetPassword (query) {
    return await app.$ajax({
      url: '/auth/resetPassword.do',
      query
    })
  },

  // 修改密码
  async modifyPassword (query) {
    return await app.$ajax({
      url: '/auth/modifyPassword.do',
      query
    })
  },

  // 模拟登录功能（单元测试时使用，不暴露）
  async simulateLogin (query) {
    return await app.$ajax({
      url: '/auth/simulateLogin.do',
      query
    })
  },

  // 查询机构树
  async queryOrganizationList (query) {
    return await app.$ajax({
      url: '/org/queryOrganizationList.do',
      query
    })
  },

  // 新增子机构
  async addOrganization (query) {
    return await app.$ajax({
      url: '/org/addOrganization.do',
      query
    })
  },

  // 修改机构名
  async updateOrganization (query) {
    return await app.$ajax({
      url: '/org/updateOrganization.do',
      query
    })
  },

  // 删除机构
  async deleteOrganization (query) {
    return await app.$ajax({
      url: '/org/deleteOrganization.do',
      query
    })
  },

  // 查询科目信息列表
  async queryQSubjectList (query) {
    return await app.$ajax({
      url: '/subject/queryQSubjectList.do',
      query
    })
  },

  // 新增科目信息
  async addQSubject (query) {
    return await app.$ajax({
      url: '/subject/addQSubject.do',
      query
    })
  },

  // 删除科目
  async delQSubject (query) {
    return await app.$ajax({
      url: '/subject/delQSubject.do',
      query
    })
  },

  // 更新科目
  async updateQSubject (query) {
    return await app.$ajax({
      url: '/subject/updateQSubject.do',
      query
    })
  },

  // 查询用户列表分页
  async queryUserPage (query) {
    return await app.$ajax({
      url: '/user/queryUserPage.do',
      query
    })
  },

  // 新增用户
  async addUser (query) {
    return await app.$ajax({
      url: '/user/addUser.do',
      query
    })
  },

  // 修改用户
  async updateUser (query) {
    return await app.$ajax({
      url: '/user/updateUser.do',
      query
    })
  },

  // 删除用户
  async deleteUser (query) {
    return await app.$ajax({
      url: '/user/deleteUser.do',
      query
    })
  },

  // 批量删除用户
  async deleteUserBatch (query) {
    return await app.$ajax({
      url: '/user/deleteUserBatch.do',
      query
    })
  },

  // 查询年级列表
  async queryQGradeList () {
    return await app.$ajax({
      url: '/qGrade/queryQGradeList.do',
      query: {}
    })
  },

  // 新增年级
  async addQGrade (query) {
    return await app.$ajax({
      url: '/qGrade/addQGrade.do',
      query
    })
  },

  // 删除年级
  async delQGrade (query) {
    return await app.$ajax({
      url: '/qGrade/delQGrade.do',
      query
    })
  },

  // 更新年级
  async updateQGrade (query) {
    return await app.$ajax({
      url: '/qGrade/updateQGrade.do',
      query
    })
  },

  // 查询试题管理列表-分页查询
  async queryQuestionManagePage (query) {
    return await app.$ajax({
      url: '/question/queryQuestionManagePage.do',
      query
    })
  },

  // 新增试题
  async addQuestionInfo (query) {
    return await app.$ajax({
      url: '/question/addQuestionInfo.do',
      query
    })
  },

  // 新增组合题
  async addCombinationQuestionInfo (query) {
    return await app.$ajax({
      url: '/question/addCombinationQuestionInfo.do',
      query
    })
  },

  // 更新试题
  async updateQuestionInfo (query) {
    return await app.$ajax({
      url: '/question/updateQuestionInfo.do',
      query
    })
  },

  // 更新组合题
  async updateCombinationQuestionInfo (query) {
    return await app.$ajax({
      url: '/question/updateCombinationQuestionInfo.do',
      query
    })
  },

  // 获取组合试题详情
  async getQuestionCombinationDetailInfo (query) {
    return await app.$ajax({
      url: '/question/getQuestionCombinationDetailInfo.do',
      query
    })
  },

  // 获取试题详情
  async getQuestionDetailInfo (query) {
    return await app.$ajax({
      url: '/question/getQuestionDetailInfo.do',
      query
    })
  },

  // 批量更新试题属性
  async batchUpdateQuestionAttributes (query) {
    return await app.$ajax({
      url: '/question/batchUpdateQuestionAttributes.do',
      query
    })
  },

  // 批量删除试题
  async batchDelQuestion (query) {
    return await app.$ajax({
      url: '/question/batchDelQuestion.do',
      query
    })
  },

  // 获取试题详情列表
  async queryQuestionsDetailList (query) {
    return await app.$ajax({
      url: '/question/queryQuestionsDetailList.do',
      query
    })
  },

  // 获取组合试题详情列表
  async queryQuestionsCombinationDetailList (query) {
    return await app.$ajax({
      url: '/question/queryQuestionsCombinationDetailList.do',
      query
    })
  },

  // 查询题目总数列表
  async queryQuestionLevelCountList (query) {
    return await app.$ajax({
      url: '/question/queryQuestionLevelCountList.do',
      query
    })
  },

  // 获取随机抽取的试题详情列表
  async queryRandomQuestionDetailList (query) {
    return await app.$ajax({
      url: '/question/queryRandomQuestionDetailList.do',
      query
    })
  },

  // 获取随机抽取的组合题详情列表
  async queryRandomQuestionCombinationDetailList (query) {
    return await app.$ajax({
      url: '/question/queryRandomQuestionCombinationDetailList.do',
      query
    })
  },

  // 地区信息列表查询
  async queryRegionList (query) {
    return await app.$ajax({
      url: '/region/queryRegionList.do',
      query
    })
  },

  // 查询知识点列表
  async queryQKnowledgeInfoList (query) {
    return await app.$ajax({
      url: '/qKnowledge/queryQKnowledgeInfoList.do',
      query
    })
  },

  // 查询管理知识点列表(分页查询)
  async queryQKnowledgeNameManagePage (query) {
    return await app.$ajax({
      url: '/qKnowledge/queryQKnowledgeNameManagePage.do',
      query
    })
  },

  // 新增知识点
  async addQKnowledgeInfo (query) {
    return await app.$ajax({
      url: '/qKnowledge/addQKnowledgeInfo.do',
      query
    })
  },

  // 更新知识点
  async updateQKnowledgeInfo (query) {
    return await app.$ajax({
      url: '/qKnowledge/updateQKnowledgeInfo.do',
      query
    })
  },

  // 获取知识点详情
  async getKnowledgeInfo (query) {
    return await app.$ajax({
      url: '/qKnowledge/getKnowledgeInfo.do',
      query
    })
  },

  // 删除知识点
  async delQKnowledgeInfo (query) {
    return await app.$ajax({
      url: '/qKnowledge/delQKnowledgeInfo.do',
      query
    })
  },

  // 字典列表查询
  async queryDictList (query) {
    return await app.$ajax({
      url: '/dict/queryDictList.do',
      query
    })
  },

  // 获取教师应聘申请详情
  async getTeacherApplyDetail (query) {
    return await app.$ajax({
      url: '/teacherApply/getTeacherApplyDetail.do',
      query
    })
  },
}
