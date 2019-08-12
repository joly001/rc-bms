// 枚举合集
export default {

  // ---------------- TeacherPosition枚举  开始 -------------------
  TeacherPosition:{
    // 枚举列表
    list: [
      {label: '班主任', value: 'HEADMASTER'},
      {label: '班主任助理', value: 'HEADMASTER_ASSISTANT'},
      {label: '年级组长', value: 'GRADE_LEADER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'HEADMASTER':
          return '班主任'
        case 'HEADMASTER_ASSISTANT':
          return '班主任助理'
        case 'GRADE_LEADER':
          return '年级组长'
        default:
          return val
      }
    }
  },
  // ---------------- TeacherPosition枚举  结束 -------------------

  // ---------------- ClassAssessType枚举  开始 -------------------
  ClassAssessType:{
    // 枚举列表
    list: [
      {label: '常规文明班级', value: 'CIVILISED_CLASS'},
      {label: '卫生示范班级', value: 'SANITATION_CLASS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'CIVILISED_CLASS':
          return '常规文明班级'
        case 'SANITATION_CLASS':
          return '卫生示范班级'
        default:
          return val
      }
    }
  },
  // ---------------- ClassAssessType枚举  结束 -------------------

  // ---------------- AssessLevel枚举  开始 -------------------
  AssessLevel:{
    // 枚举列表
    list: [
      {label: 'C', value: 'LEVEL_C'},
      {label: 'B', value: 'LEVEL_B'},
      {label: 'A', value: 'LEVEL_A'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'LEVEL_C':
          return 'C'
        case 'LEVEL_B':
          return 'B'
        case 'LEVEL_A':
          return 'A'
        default:
          return val
      }
    }
  },
  // ---------------- AssessLevel枚举  结束 -------------------

  // ---------------- YesNoStatus枚举  开始 -------------------
  YesNoStatus:{
    // 枚举列表
    list: [
      {label: '是', value: 'YES'},
      {label: '否', value: 'NO'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'YES':
          return '是'
        case 'NO':
          return '否'
        default:
          return val
      }
    }
  },
  // ---------------- YesNoStatus枚举  结束 -------------------

  // ---------------- InspectType枚举  开始 -------------------
  InspectType:{
    // 枚举列表
    list: [
      {label: '早自习到岗', value: 'MORNING_LESSON'},
      {label: '课间操跟跑', value: 'BREAK_EXERCISE'},
      {label: '晚自习到岗', value: 'EVENING_LESSON'},
      {label: '例会到岗', value: 'REGULAR_MEETING'},
      {label: '下寝情况', value: 'DORMITORY_CHECK'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'MORNING_LESSON':
          return '早自习到岗'
        case 'BREAK_EXERCISE':
          return '课间操跟跑'
        case 'EVENING_LESSON':
          return '晚自习到岗'
        case 'REGULAR_MEETING':
          return '例会到岗'
        case 'DORMITORY_CHECK':
          return '下寝情况'
        default:
          return val
      }
    }
  },
  // ---------------- InspectType枚举  结束 -------------------

  // ---------------- AssessRegularRecordType枚举  开始 -------------------
  AssessRegularRecordType:{
    // 枚举列表
    list: [
      {label: '年级常规检评', value: 'GRADE_REGULAR'},
      {label: '学工处检评', value: 'STUDENT_REGULAR'},
      {label: '校学生会检评', value: 'UNION_REGULAR'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'GRADE_REGULAR':
          return '年级常规检评'
        case 'STUDENT_REGULAR':
          return '学工处检评'
        case 'UNION_REGULAR':
          return '校学生会检评'
        default:
          return val
      }
    }
  },
  // ---------------- AssessRegularRecordType枚举  结束 -------------------

  // ---------------- Education枚举  开始 -------------------
  Education:{
    // 枚举列表
    list: [
      {label: '硕士研究生', value: 'POSTGRADUATE'},
      {label: '大学本科', value: 'FULL_COLLEGE'},
      {label: '大学专科', value: 'JUNIOR_COLLEGE'},
      {label: '大学专科（自考）', value: 'SELF_JUNIOR'},
      {label: '职高', value: 'VOCATIONAL_HIGH'},
      {label: '中技', value: 'INTERMEDIATE_TECHNOLOGY'},
      {label: '中专', value: 'SECONDARY_SPECIALIZED'},
      {label: '高中', value: 'HIGH_SCHOOL'},
      {label: '初中', value: 'JUNIOR_SCHOOL'},
      {label: '小学', value: 'PRIMARY_SCHOOL'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'POSTGRADUATE':
          return '硕士研究生'
        case 'FULL_COLLEGE':
          return '大学本科'
        case 'JUNIOR_COLLEGE':
          return '大学专科'
        case 'SELF_JUNIOR':
          return '大学专科（自考）'
        case 'VOCATIONAL_HIGH':
          return '职高'
        case 'INTERMEDIATE_TECHNOLOGY':
          return '中技'
        case 'SECONDARY_SPECIALIZED':
          return '中专'
        case 'HIGH_SCHOOL':
          return '高中'
        case 'JUNIOR_SCHOOL':
          return '初中'
        case 'PRIMARY_SCHOOL':
          return '小学'
        default:
          return val
      }
    }
  },
  // ---------------- Education枚举  结束 -------------------

  // ---------------- Sex枚举  开始 -------------------
  Sex:{
    // 枚举列表
    list: [
      {label: '男', value: 'Male'},
      {label: '女', value: 'Female'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'Male':
          return '男'
        case 'Female':
          return '女'
        default:
          return val
      }
    }
  },
  // ---------------- Sex枚举  结束 -------------------

  // ---------------- TeacherTitleType枚举  开始 -------------------
  TeacherTitleType:{
    // 枚举列表
    list: [
      {label: '无', value: 'NOTHING'},
      {label: '助理经济师', value: 'ASSISTANT_ECONOMIST'},
      {label: '初级经济师', value: 'JUNIOR_ECONOMIST'},
      {label: '初级医师', value: 'JUNIOR_PHYSICIAN'},
      {label: '执照医师', value: 'LICENSED_DOCTOR'},
      {label: '护士', value: 'NURSE'},
      {label: '助理会计师', value: 'ASSISTANT_ACCOUNTANT'},
      {label: '会计师', value: 'ACCOUNTANT'},
      {label: '中级会计师', value: 'INTERMEDIATE_ACCOUNTANT'},
      {label: '中级人力资源师', value: 'INTERMEDIATE_RESOURCES'},
      {label: '见习', value: 'PROBATION'},
      {label: '未评', value: 'NO_COMMENT'},
      {label: '未定职称', value: 'RANK_UNDECIDED'},
      {label: '中学一级教师', value: 'MIDDLE_FIRST_GRADE'},
      {label: '中学二级教师', value: 'MIDDLE_SECOND_GRADE'},
      {label: '中学高级教师', value: 'MIDDLE_SENIOR_GRADE'},
      {label: '小学一级教师', value: 'FIRST_GRADE'},
      {label: '小学二级教师', value: 'SECOND_GRADE'},
      {label: '小学高级教师', value: 'HIGHER_GRADE'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NOTHING':
          return '无'
        case 'ASSISTANT_ECONOMIST':
          return '助理经济师'
        case 'JUNIOR_ECONOMIST':
          return '初级经济师'
        case 'JUNIOR_PHYSICIAN':
          return '初级医师'
        case 'LICENSED_DOCTOR':
          return '执照医师'
        case 'NURSE':
          return '护士'
        case 'ASSISTANT_ACCOUNTANT':
          return '助理会计师'
        case 'ACCOUNTANT':
          return '会计师'
        case 'INTERMEDIATE_ACCOUNTANT':
          return '中级会计师'
        case 'INTERMEDIATE_RESOURCES':
          return '中级人力资源师'
        case 'PROBATION':
          return '见习'
        case 'NO_COMMENT':
          return '未评'
        case 'RANK_UNDECIDED':
          return '未定职称'
        case 'MIDDLE_FIRST_GRADE':
          return '中学一级教师'
        case 'MIDDLE_SECOND_GRADE':
          return '中学二级教师'
        case 'MIDDLE_SENIOR_GRADE':
          return '中学高级教师'
        case 'FIRST_GRADE':
          return '小学一级教师'
        case 'SECOND_GRADE':
          return '小学二级教师'
        case 'HIGHER_GRADE':
          return '小学高级教师'
        default:
          return val
      }
    }
  },
  // ---------------- TeacherTitleType枚举  结束 -------------------

  // ---------------- HighestEducation枚举  开始 -------------------
  HighestEducation:{
    // 枚举列表
    list: [
      {label: '博士研究生', value: 'DOCTORAL_CANDIDATE'},
      {label: '硕士研究生', value: 'POSTGRADUATE'},
      {label: '硕士研究生（函授）', value: 'CORRESPONDENCE_POSTGRADUATE'},
      {label: '硕士研究生（在职）', value: 'JOB_POSTGRADUATE'},
      {label: '硕士研究生（脱产）', value: 'OUT_PRODUCTION_POSTGRADUATE'},
      {label: '大学本科', value: 'FULL_COLLEGE'},
      {label: '大学本科（自考）', value: 'SELF_COLLEGE'},
      {label: '大学本科（函授）', value: 'CORRESPONDENCE_COLLEGE'},
      {label: '大学本科（成教）', value: 'ADULT_COLLEGE'},
      {label: '大学本科（脱产）', value: 'OUT_PRODUCTION_COLLEGE'},
      {label: '大学专科', value: 'SPECIALTY'},
      {label: '大学专科（自考）', value: 'SELF_SPECIALTY'},
      {label: '大学专科（函授）', value: 'CORRESPONDENCE_SPECIALTY'},
      {label: '大学专科（在职）', value: 'JOB_SPECIALTY'},
      {label: '职高', value: 'VOCATIONAL_HIGH'},
      {label: '中专', value: 'SECONDARY_SPECIALIZED'},
      {label: '高中', value: 'HIGH_SCHOOL'},
      {label: '初中', value: 'JUNIOR_SCHOOL'},
      {label: '小学', value: 'PRIMARY_SCHOOL'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'DOCTORAL_CANDIDATE':
          return '博士研究生'
        case 'POSTGRADUATE':
          return '硕士研究生'
        case 'CORRESPONDENCE_POSTGRADUATE':
          return '硕士研究生（函授）'
        case 'JOB_POSTGRADUATE':
          return '硕士研究生（在职）'
        case 'OUT_PRODUCTION_POSTGRADUATE':
          return '硕士研究生（脱产）'
        case 'FULL_COLLEGE':
          return '大学本科'
        case 'SELF_COLLEGE':
          return '大学本科（自考）'
        case 'CORRESPONDENCE_COLLEGE':
          return '大学本科（函授）'
        case 'ADULT_COLLEGE':
          return '大学本科（成教）'
        case 'OUT_PRODUCTION_COLLEGE':
          return '大学本科（脱产）'
        case 'SPECIALTY':
          return '大学专科'
        case 'SELF_SPECIALTY':
          return '大学专科（自考）'
        case 'CORRESPONDENCE_SPECIALTY':
          return '大学专科（函授）'
        case 'JOB_SPECIALTY':
          return '大学专科（在职）'
        case 'VOCATIONAL_HIGH':
          return '职高'
        case 'SECONDARY_SPECIALIZED':
          return '中专'
        case 'HIGH_SCHOOL':
          return '高中'
        case 'JUNIOR_SCHOOL':
          return '初中'
        case 'PRIMARY_SCHOOL':
          return '小学'
        default:
          return val
      }
    }
  },
  // ---------------- HighestEducation枚举  结束 -------------------

  // ---------------- OrgType枚举  开始 -------------------
  OrgType:{
    // 枚举列表
    list: [
      {label: '根部门', value: 'ROOT_ORG'},
      {label: '行政部门', value: 'ADMIN_ORG'},
      {label: '教研组', value: 'TEACH_ORG'},
      {label: '家长组', value: 'PARENT_ORG'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ROOT_ORG':
          return '根部门'
        case 'ADMIN_ORG':
          return '行政部门'
        case 'TEACH_ORG':
          return '教研组'
        case 'PARENT_ORG':
          return '家长组'
        default:
          return val
      }
    }
  },
  // ---------------- OrgType枚举  结束 -------------------

  // ---------------- ProjectType枚举  开始 -------------------
  ProjectType:{
    // 枚举列表
    list: [
      {label: '论文', value: 'PAPER'},
      {label: '赛课及指导学生', value: 'COMPETITION'},
      {label: '课题、课程', value: 'TOPICS'},
      {label: '经验交流及学术报告', value: 'ACADEMIC'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'PAPER':
          return '论文'
        case 'COMPETITION':
          return '赛课及指导学生'
        case 'TOPICS':
          return '课题、课程'
        case 'ACADEMIC':
          return '经验交流及学术报告'
        default:
          return val
      }
    }
  },
  // ---------------- ProjectType枚举  结束 -------------------

  // ---------------- ExamineType枚举  开始 -------------------
  ExamineType:{
    // 枚举列表
    list: [
      {label: '未审核', value: 'UNAUDITED'},
      {label: '通过', value: 'ADOPT'},
      {label: '不通过', value: 'NOT_PASS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNAUDITED':
          return '未审核'
        case 'ADOPT':
          return '通过'
        case 'NOT_PASS':
          return '不通过'
        default:
          return val
      }
    }
  },
  // ---------------- ExamineType枚举  结束 -------------------

  // ---------------- ClassStatus枚举  开始 -------------------
  ClassStatus:{
    // 枚举列表
    list: [
      {label: '在读', value: 'UN_GRADUATED'},
      {label: '毕业', value: 'GRADUATED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UN_GRADUATED':
          return '在读'
        case 'GRADUATED':
          return '毕业'
        default:
          return val
      }
    }
  },
  // ---------------- ClassStatus枚举  结束 -------------------

  // ---------------- ClassType枚举  开始 -------------------
  ClassType:{
    // 枚举列表
    list: [
      {label: '实验班', value: 'EXPERIMENT_CLASS'},
      {label: '平行班', value: 'PARALLEL_CLASS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'EXPERIMENT_CLASS':
          return '实验班'
        case 'PARALLEL_CLASS':
          return '平行班'
        default:
          return val
      }
    }
  },
  // ---------------- ClassType枚举  结束 -------------------

  // ---------------- EnableStatus枚举  开始 -------------------
  EnableStatus:{
    // 枚举列表
    list: [
      {label: '是', value: 'Enabled'},
      {label: '否', value: 'Unenabled'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'Enabled':
          return '是'
        case 'Unenabled':
          return '否'
        default:
          return val
      }
    }
  },
  // ---------------- EnableStatus枚举  结束 -------------------

  // ---------------- StudentNature枚举  开始 -------------------
  StudentNature:{
    // 枚举列表
    list: [
      {label: '在校', value: 'AT_SCHOOL'},
      {label: '离校', value: 'LEAVE_SCHOOL'},
      {label: '毕业', value: 'GRADUATE'},
      {label: '其他', value: 'OTHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'AT_SCHOOL':
          return '在校'
        case 'LEAVE_SCHOOL':
          return '离校'
        case 'GRADUATE':
          return '毕业'
        case 'OTHER':
          return '其他'
        default:
          return val
      }
    }
  },
  // ---------------- StudentNature枚举  结束 -------------------

  // ---------------- DictType枚举  开始 -------------------
  DictType:{
    // 枚举列表
    list: [
      {label: '文化生招生类别', value: 'RECRUIT_CULTURE'},
      {label: '特长生招生类别', value: 'RECRUIT_SPECIALITY'},
      {label: '特长生专业', value: 'SPECIALITY'},
      {label: '岗位类型', value: 'TEACHER_POSITION'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'RECRUIT_CULTURE':
          return '文化生招生类别'
        case 'RECRUIT_SPECIALITY':
          return '特长生招生类别'
        case 'SPECIALITY':
          return '特长生专业'
        case 'TEACHER_POSITION':
          return '岗位类型'
        default:
          return val
      }
    }
  },
  // ---------------- DictType枚举  结束 -------------------

  // ---------------- StorageLife枚举  开始 -------------------
  StorageLife:{
    // 枚举列表
    list: [
      {label: '永久30年', value: 'PERPETUAL'},
      {label: '永久10年', value: 'LONG_TIME'},
      {label: '视情况而定', value: 'APPROPRIATE'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'PERPETUAL':
          return '永久30年'
        case 'LONG_TIME':
          return '永久10年'
        case 'APPROPRIATE':
          return '视情况而定'
        default:
          return val
      }
    }
  },
  // ---------------- StorageLife枚举  结束 -------------------

  // ---------------- DossierStatus枚举  开始 -------------------
  DossierStatus:{
    // 枚举列表
    list: [
      {label: '在库', value: 'STOCK'},
      {label: '借出', value: 'LOAN'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'STOCK':
          return '在库'
        case 'LOAN':
          return '借出'
        default:
          return val
      }
    }
  },
  // ---------------- DossierStatus枚举  结束 -------------------

  // ---------------- ExamType枚举  开始 -------------------
  ExamType:{
    // 枚举列表
    list: [
      {label: '联考', value: 'UNITED_EXAM'},
      {label: '期中考试', value: 'MID_TERM_EXAM'},
      {label: '期末考试', value: 'END_TERM_EXAM'},
      {label: '月考', value: 'MONTHLY_EXAM'},
      {label: '统考', value: 'UNIFIED_EXAM'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNITED_EXAM':
          return '联考'
        case 'MID_TERM_EXAM':
          return '期中考试'
        case 'END_TERM_EXAM':
          return '期末考试'
        case 'MONTHLY_EXAM':
          return '月考'
        case 'UNIFIED_EXAM':
          return '统考'
        default:
          return val
      }
    }
  },
  // ---------------- ExamType枚举  结束 -------------------

  // ---------------- RecruitType枚举  开始 -------------------
  RecruitType:{
    // 枚举列表
    list: [
      {label: '文化生', value: 'CULTURE'},
      {label: '特长生', value: 'SPECIALITY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'CULTURE':
          return '文化生'
        case 'SPECIALITY':
          return '特长生'
        default:
          return val
      }
    }
  },
  // ---------------- RecruitType枚举  结束 -------------------

  // ---------------- RecruitStudentStatus枚举  开始 -------------------
  RecruitStudentStatus:{
    // 枚举列表
    list: [
      {label: '未筛选', value: 'APPLIED'},
      {label: '未开考', value: 'NONE_EXAM'},
      {label: '已录取', value: 'ENROLL'},
      {label: '未录取', value: 'DISQUALIFY'},
      {label: '未达标', value: 'NONE_QUALIFIED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'APPLIED':
          return '未筛选'
        case 'NONE_EXAM':
          return '未开考'
        case 'ENROLL':
          return '已录取'
        case 'DISQUALIFY':
          return '未录取'
        case 'NONE_QUALIFIED':
          return '未达标'
        default:
          return val
      }
    }
  },
  // ---------------- RecruitStudentStatus枚举  结束 -------------------

  // ---------------- ApplyWay枚举  开始 -------------------
  ApplyWay:{
    // 枚举列表
    list: [
      {label: '微信公众号', value: 'WX'},
      {label: '网站', value: 'WEB'},
      {label: '补录', value: 'REPLENISH'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'WX':
          return '微信公众号'
        case 'WEB':
          return '网站'
        case 'REPLENISH':
          return '补录'
        default:
          return val
      }
    }
  },
  // ---------------- ApplyWay枚举  结束 -------------------

  // ---------------- SendStatus枚举  开始 -------------------
  SendStatus:{
    // 枚举列表
    list: [
      {label: '未发送', value: 'UNSENT'},
      {label: '发送失败', value: 'FAIL'},
      {label: '发送成功', value: 'SUCCESS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNSENT':
          return '未发送'
        case 'FAIL':
          return '发送失败'
        case 'SUCCESS':
          return '发送成功'
        default:
          return val
      }
    }
  },
  // ---------------- SendStatus枚举  结束 -------------------

  // ---------------- SeniorScoreAnalysisType枚举  开始 -------------------
  SeniorScoreAnalysisType:{
    // 枚举列表
    list: [
      {label: '总分成绩分析', value: 'TOTAL_SCORE_ANALYSIS'},
      {label: '单科成绩分析', value: 'SINGLE_COURSE_ANALYSIS'},
      {label: '得分层次分析', value: 'SCORE_LEVEL_ANALYSIS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'TOTAL_SCORE_ANALYSIS':
          return '总分成绩分析'
        case 'SINGLE_COURSE_ANALYSIS':
          return '单科成绩分析'
        case 'SCORE_LEVEL_ANALYSIS':
          return '得分层次分析'
        default:
          return val
      }
    }
  },
  // ---------------- SeniorScoreAnalysisType枚举  结束 -------------------

  // ---------------- JuniorScoreAnalysisType枚举  开始 -------------------
  JuniorScoreAnalysisType:{
    // 枚举列表
    list: [
      {label: '单科情况分析', value: 'SINGLE_COURSE_ANALYSIS'},
      {label: '各科A等人数分析', value: 'COURSE_A_NUM_ANALYSIS'},
      {label: '各科B等生转化率分析', value: 'COURSE_B_TRANS_ANALYSIS'},
      {label: '班级整体情况分析', value: 'CLASS_ENTIRE_ANALYSIS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'SINGLE_COURSE_ANALYSIS':
          return '单科情况分析'
        case 'COURSE_A_NUM_ANALYSIS':
          return '各科A等人数分析'
        case 'COURSE_B_TRANS_ANALYSIS':
          return '各科B等生转化率分析'
        case 'CLASS_ENTIRE_ANALYSIS':
          return '班级整体情况分析'
        default:
          return val
      }
    }
  },
  // ---------------- JuniorScoreAnalysisType枚举  结束 -------------------

  // ---------------- StudentStatus枚举  开始 -------------------
  StudentStatus:{
    // 枚举列表
    list: [
      {label: '在校生', value: 'INTERNAL_STUDENT'},
      {label: '转入', value: 'INTO'},
      {label: '在本校寄读', value: 'POST_READING'},
      {label: '复学', value: 'REENTRY'},
      {label: '保留学籍', value: 'KEEP_STUDENT'},
      {label: '转出', value: 'OUT_OF'},
      {label: '休学', value: 'QUIT_SCHOOL'},
      {label: '在外校寄读', value: 'OUT_POST_READING'},
      {label: '开除', value: 'EXPEL'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'INTERNAL_STUDENT':
          return '在校生'
        case 'INTO':
          return '转入'
        case 'POST_READING':
          return '在本校寄读'
        case 'REENTRY':
          return '复学'
        case 'KEEP_STUDENT':
          return '保留学籍'
        case 'OUT_OF':
          return '转出'
        case 'QUIT_SCHOOL':
          return '休学'
        case 'OUT_POST_READING':
          return '在外校寄读'
        case 'EXPEL':
          return '开除'
        default:
          return val
      }
    }
  },
  // ---------------- StudentStatus枚举  结束 -------------------

  // ---------------- StudentPoliticsStatus枚举  开始 -------------------
  StudentPoliticsStatus:{
    // 枚举列表
    list: [
      {label: '少先队员', value: 'YOUNG_PIONEER'},
      {label: '共青团员', value: 'LEAGUE_MEMBER'},
      {label: '共产党员', value: 'COMMUNIST'},
      {label: '群众', value: 'MASSES'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'YOUNG_PIONEER':
          return '少先队员'
        case 'LEAGUE_MEMBER':
          return '共青团员'
        case 'COMMUNIST':
          return '共产党员'
        case 'MASSES':
          return '群众'
        default:
          return val
      }
    }
  },
  // ---------------- StudentPoliticsStatus枚举  结束 -------------------

  // ---------------- TeacherApplyPosition枚举  开始 -------------------
  TeacherApplyPosition:{
    // 枚举列表
    list: [
      {label: '语文', value: 'LANGUAGE'},
      {label: '数学', value: 'MATH'},
      {label: '英语', value: 'ENGLISH'},
      {label: '物理', value: 'PHYSICS'},
      {label: '化学', value: 'CHEMISTRY'},
      {label: '政治', value: 'POLITICS'},
      {label: '历史', value: 'HISTORY'},
      {label: '地理', value: 'GEOGRAPHY'},
      {label: '生物', value: 'BIOLOGY'},
      {label: '体育', value: 'PHYSICAL'},
      {label: '音乐', value: 'MUSIC'},
      {label: '技术', value: 'TECHNOLOGY'},
      {label: '美术', value: 'ART'},
      {label: '心理学', value: 'PSYCHOLOGY'},
      {label: '校办干事', value: 'HAREST_SECRETARY'},
      {label: '学工处干事', value: 'ACADEMIC_SECRETARY'},
      {label: '总务处干事', value: 'AFFAIRS_SECRETARY'},
      {label: '招生办干事', value: 'ADMISSION_SECRETARY'},
      {label: '教务处干事', value: 'TEACHING_SECRETARY'},
      {label: '教科室干事', value: 'EDUCATION_SECRETARY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'LANGUAGE':
          return '语文'
        case 'MATH':
          return '数学'
        case 'ENGLISH':
          return '英语'
        case 'PHYSICS':
          return '物理'
        case 'CHEMISTRY':
          return '化学'
        case 'POLITICS':
          return '政治'
        case 'HISTORY':
          return '历史'
        case 'GEOGRAPHY':
          return '地理'
        case 'BIOLOGY':
          return '生物'
        case 'PHYSICAL':
          return '体育'
        case 'MUSIC':
          return '音乐'
        case 'TECHNOLOGY':
          return '技术'
        case 'ART':
          return '美术'
        case 'PSYCHOLOGY':
          return '心理学'
        case 'HAREST_SECRETARY':
          return '校办干事'
        case 'ACADEMIC_SECRETARY':
          return '学工处干事'
        case 'AFFAIRS_SECRETARY':
          return '总务处干事'
        case 'ADMISSION_SECRETARY':
          return '招生办干事'
        case 'TEACHING_SECRETARY':
          return '教务处干事'
        case 'EDUCATION_SECRETARY':
          return '教科室干事'
        default:
          return val
      }
    }
  },
  // ---------------- TeacherApplyPosition枚举  结束 -------------------

  // ---------------- TeacherApplyStatus枚举  开始 -------------------
  TeacherApplyStatus:{
    // 枚举列表
    list: [
      {label: '初始', value: 'INITIAL'},
      {label: '通过', value: 'PASS'},
      {label: '不通过', value: 'DENY'},
      {label: '已入库', value: 'IS_IN'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'INITIAL':
          return '初始'
        case 'PASS':
          return '通过'
        case 'DENY':
          return '不通过'
        case 'IS_IN':
          return '已入库'
        default:
          return val
      }
    }
  },
  // ---------------- TeacherApplyStatus枚举  结束 -------------------

  // ---------------- MessageStatus枚举  开始 -------------------
  MessageStatus:{
    // 枚举列表
    list: [
      {label: '未发送', value: 'INITIAL'},
      {label: '成功', value: 'SUCCESS'},
      {label: '失败', value: 'FAILED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'INITIAL':
          return '未发送'
        case 'SUCCESS':
          return '成功'
        case 'FAILED':
          return '失败'
        default:
          return val
      }
    }
  },
  // ---------------- MessageStatus枚举  结束 -------------------

  // ---------------- MessageConfirm枚举  开始 -------------------
  MessageConfirm:{
    // 枚举列表
    list: [
      {label: '未确认', value: 'UNCONFIRMED'},
      {label: '已确认', value: 'CONFIRMED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNCONFIRMED':
          return '未确认'
        case 'CONFIRMED':
          return '已确认'
        default:
          return val
      }
    }
  },
  // ---------------- MessageConfirm枚举  结束 -------------------

  // ---------------- FormationType枚举  开始 -------------------
  FormationType:{
    // 枚举列表
    list: [
      {label: '附中编', value: 'ATTACHED_SCHOOL_FORMATION'},
      {label: '附中岗', value: 'ATTACHED_POSITION_FORMATION'},
      {label: '广益编', value: 'GY_SCHOOL_FORMATION'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ATTACHED_SCHOOL_FORMATION':
          return '附中编'
        case 'ATTACHED_POSITION_FORMATION':
          return '附中岗'
        case 'GY_SCHOOL_FORMATION':
          return '广益编'
        default:
          return val
      }
    }
  },
  // ---------------- FormationType枚举  结束 -------------------

  // ---------------- PoliticsStatus枚举  开始 -------------------
  PoliticsStatus:{
    // 枚举列表
    list: [
      {label: '中共党员', value: 'COMMUNIST'},
      {label: '中共预备党员', value: 'COMMUNIST_PREPARE'},
      {label: '共青团员', value: 'LEAGUE'},
      {label: '民革党员', value: 'MINGGE'},
      {label: '民盟盟员', value: 'LEAGUE_MEMBERS'},
      {label: '民建会员', value: 'CIVIL_SERVICE_MEMBERS'},
      {label: '民进会员', value: 'DPP_MEMBER'},
      {label: '农工党党员', value: 'RURAL_LABOR_PARTY'},
      {label: '致公党党员', value: 'PUBLIC_INTEREST_PARTY'},
      {label: '九三学社社员', value: 'MEMBER_OF_JIUSAN_SOCIETY'},
      {label: '台盟盟员', value: 'TAIWAN_ALLIANCE_MEMBERS'},
      {label: '无党派人士', value: 'NON_PARTISANS'},
      {label: '群众', value: 'MASSES'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'COMMUNIST':
          return '中共党员'
        case 'COMMUNIST_PREPARE':
          return '中共预备党员'
        case 'LEAGUE':
          return '共青团员'
        case 'MINGGE':
          return '民革党员'
        case 'LEAGUE_MEMBERS':
          return '民盟盟员'
        case 'CIVIL_SERVICE_MEMBERS':
          return '民建会员'
        case 'DPP_MEMBER':
          return '民进会员'
        case 'RURAL_LABOR_PARTY':
          return '农工党党员'
        case 'PUBLIC_INTEREST_PARTY':
          return '致公党党员'
        case 'MEMBER_OF_JIUSAN_SOCIETY':
          return '九三学社社员'
        case 'TAIWAN_ALLIANCE_MEMBERS':
          return '台盟盟员'
        case 'NON_PARTISANS':
          return '无党派人士'
        case 'MASSES':
          return '群众'
        default:
          return val
      }
    }
  },
  // ---------------- PoliticsStatus枚举  结束 -------------------

  // ---------------- GradeLevel枚举  开始 -------------------
  GradeLevel:{
    // 枚举列表
    list: [
      {label: '初中', value: 'JUNIOR'},
      {label: '高中', value: 'SENIOR'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'JUNIOR':
          return '初中'
        case 'SENIOR':
          return '高中'
        default:
          return val
      }
    }
  },
  // ---------------- GradeLevel枚举  结束 -------------------

  // ---------------- BusinessType枚举  开始 -------------------
  BusinessType:{
    // 枚举列表
    list: [
      {label: '学生获奖信息', value: 'STUDENT_PRIZE'},
      {label: '家长信箱', value: 'PATRIARCH_MAILBOX'},
      {label: '通知公告', value: 'NOTICE'},
      {label: '活动参与', value: 'NOTICE_PARTICIPATION'},
      {label: '家访', value: 'HOME_VISITING'},
      {label: '教研成果', value: 'TEACHING_RESEARCH'},
      {label: '教研活动', value: 'TEACH_GROUP_ACTIVITY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'STUDENT_PRIZE':
          return '学生获奖信息'
        case 'PATRIARCH_MAILBOX':
          return '家长信箱'
        case 'NOTICE':
          return '通知公告'
        case 'NOTICE_PARTICIPATION':
          return '活动参与'
        case 'HOME_VISITING':
          return '家访'
        case 'TEACHING_RESEARCH':
          return '教研成果'
        case 'TEACH_GROUP_ACTIVITY':
          return '教研活动'
        default:
          return val
      }
    }
  },
  // ---------------- BusinessType枚举  结束 -------------------

  // ---------------- ScoreStageType枚举  开始 -------------------
  ScoreStageType:{
    // 枚举列表
    list: [
      {label: '小题', value: 'SMALL'},
      {label: '大题', value: 'BIG'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'SMALL':
          return '小题'
        case 'BIG':
          return '大题'
        default:
          return val
      }
    }
  },
  // ---------------- ScoreStageType枚举  结束 -------------------

  // ---------------- OperTargetType枚举  开始 -------------------
  OperTargetType:{
    // 枚举列表
    list: [
      {label: '招生平台考试批次', value: 'RECRUIT_BATCH'},
      {label: '招生平台合作机构', value: 'RECRUIT_INSTITUTION'},
      {label: '招生平台招生公告', value: 'RECRUIT_NOTICE'},
      {label: '招生平台招生宣传页', value: 'RECRUIT_BANNER'},
      {label: '招生平台监考视频', value: 'RECRUIT_EXAM_ATTACHMENT'},
      {label: '招生平台考生信息', value: 'RECRUIT_STUDENT'},
      {label: '招生平台考点', value: 'RECRUIT_EXAM_CENTRE'},
      {label: '招生平台面试通知', value: 'RECRUIT_INTERVIEW_MESSAGE'},
      {label: '招生平台录取通知', value: 'RECRUIT_ENROLL_MESSAGE'},
      {label: '招生平台考生成绩', value: 'RECRUIT_STUDENT_ENROLL'},
      {label: '档案类别', value: 'DOSSIER_TYPE'},
      {label: '档案位置', value: 'DOSSIER_LOCATION'},
      {label: '档案', value: 'DOSSIER'},
      {label: '工资', value: 'SALARY'},
      {label: '课表', value: 'TIMETABLE'},
      {label: '招生平台考生信息', value: 'RECRUIT_STUDENT_EXPORT'},
      {label: '招生平台考生信息', value: 'RECRUIT_STUDENT_BATCH'},
      {label: '招生平台考生信息', value: 'RECRUIT_STUDENT_EXAM_CENTRE'},
      {label: '学生信息', value: 'STUDENT'},
      {label: '学生获奖信息', value: 'STUDENT_PRIZE'},
      {label: '学生信息变更记录', value: 'STUDENT_CHANGE'},
      {label: '家长信箱', value: 'PATRIARCH_MAILBOX'},
      {label: '家长信箱回复', value: 'PATRIARCH_MAILBOX_REPLY'},
      {label: '初中成绩基础数据', value: 'JUNIOR_SCORE_BASE'},
      {label: '高中成绩基础数据', value: 'SENIOR_SCORE_BASE'},
      {label: '工资模板', value: 'SALARY_TEMPLATE'},
      {label: '学生异动信息', value: 'STUDENT_TRANSACTION'},
      {label: '成绩', value: 'SCORE'},
      {label: '教研成果', value: 'TEACHING_RESEARCH'},
      {label: '问卷调查', value: 'SURVEY'},
      {label: '通知公告', value: 'NOTICE'},
      {label: '活动', value: 'ACTIVITY'},
      {label: '教研团队', value: 'NOTICE_TEACH_GROUP'},
      {label: '教师备课', value: 'TEACHER_PREPARE_LESSONS'},
      {label: '作业检查', value: 'ASSESS_HOMEWORK'},
      {label: '评教评学', value: 'ASSESS_SATISFACTION'},
      {label: '晨读检查', value: 'ASSESS_MORNING_STUDY'},
      {label: '常规检查', value: 'ASSESS_REGULAR_RECORD'},
      {label: '教研活动', value: 'TEACH_GROUP_ACTIVITY'},
      {label: '高中成绩分析', value: 'SENIOR_SCORE_STATISTIC'},
      {label: '课堂检查', value: 'ASSESS_INSPECT_CLASSROOM'},
      {label: '教研组考核', value: 'ASSESS_TEACH_GROUP'},
      {label: '教师绩效考核', value: 'ASSESS_TEACHER_PERFORMANCE'},
      {label: '非文化成绩', value: 'SCORE_NON_CULTURAL'},
      {label: '用户信息', value: 'USER'},
      {label: '教师考核总表', value: 'ASSESS_TEACHER'},
      {label: '教研成果考核', value: 'ASSESS_TEACHING_RESEARCH'},
      {label: '教研组教学人员聘任', value: 'TEACH_GROUP_USER'},
      {label: '文明班级', value: 'ASSESS_CLASS_RECORD'},
      {label: '到岗情况', value: 'ASSESS_INSPECT_RECORD'},
      {label: '卫生检查', value: 'ASSESS_SANITATION'},
      {label: '各线考核', value: 'ASSESS_STAFF'},
      {label: '教师应聘信息', value: 'TEACHER_APPLY'},
      {label: '教师学工考评', value: 'TEACHER_ASSESS'},
      {label: '教职工信息', value: 'TEACHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'RECRUIT_BATCH':
          return '招生平台考试批次'
        case 'RECRUIT_INSTITUTION':
          return '招生平台合作机构'
        case 'RECRUIT_NOTICE':
          return '招生平台招生公告'
        case 'RECRUIT_BANNER':
          return '招生平台招生宣传页'
        case 'RECRUIT_EXAM_ATTACHMENT':
          return '招生平台监考视频'
        case 'RECRUIT_STUDENT':
          return '招生平台考生信息'
        case 'RECRUIT_EXAM_CENTRE':
          return '招生平台考点'
        case 'RECRUIT_INTERVIEW_MESSAGE':
          return '招生平台面试通知'
        case 'RECRUIT_ENROLL_MESSAGE':
          return '招生平台录取通知'
        case 'RECRUIT_STUDENT_ENROLL':
          return '招生平台考生成绩'
        case 'DOSSIER_TYPE':
          return '档案类别'
        case 'DOSSIER_LOCATION':
          return '档案位置'
        case 'DOSSIER':
          return '档案'
        case 'SALARY':
          return '工资'
        case 'TIMETABLE':
          return '课表'
        case 'RECRUIT_STUDENT_EXPORT':
          return '招生平台考生信息'
        case 'RECRUIT_STUDENT_BATCH':
          return '招生平台考生信息'
        case 'RECRUIT_STUDENT_EXAM_CENTRE':
          return '招生平台考生信息'
        case 'STUDENT':
          return '学生信息'
        case 'STUDENT_PRIZE':
          return '学生获奖信息'
        case 'STUDENT_CHANGE':
          return '学生信息变更记录'
        case 'PATRIARCH_MAILBOX':
          return '家长信箱'
        case 'PATRIARCH_MAILBOX_REPLY':
          return '家长信箱回复'
        case 'JUNIOR_SCORE_BASE':
          return '初中成绩基础数据'
        case 'SENIOR_SCORE_BASE':
          return '高中成绩基础数据'
        case 'SALARY_TEMPLATE':
          return '工资模板'
        case 'STUDENT_TRANSACTION':
          return '学生异动信息'
        case 'SCORE':
          return '成绩'
        case 'TEACHING_RESEARCH':
          return '教研成果'
        case 'SURVEY':
          return '问卷调查'
        case 'NOTICE':
          return '通知公告'
        case 'ACTIVITY':
          return '活动'
        case 'NOTICE_TEACH_GROUP':
          return '教研团队'
        case 'TEACHER_PREPARE_LESSONS':
          return '教师备课'
        case 'ASSESS_HOMEWORK':
          return '作业检查'
        case 'ASSESS_SATISFACTION':
          return '评教评学'
        case 'ASSESS_MORNING_STUDY':
          return '晨读检查'
        case 'ASSESS_REGULAR_RECORD':
          return '常规检查'
        case 'TEACH_GROUP_ACTIVITY':
          return '教研活动'
        case 'SENIOR_SCORE_STATISTIC':
          return '高中成绩分析'
        case 'ASSESS_INSPECT_CLASSROOM':
          return '课堂检查'
        case 'ASSESS_TEACH_GROUP':
          return '教研组考核'
        case 'ASSESS_TEACHER_PERFORMANCE':
          return '教师绩效考核'
        case 'SCORE_NON_CULTURAL':
          return '非文化成绩'
        case 'USER':
          return '用户信息'
        case 'ASSESS_TEACHER':
          return '教师考核总表'
        case 'ASSESS_TEACHING_RESEARCH':
          return '教研成果考核'
        case 'TEACH_GROUP_USER':
          return '教研组教学人员聘任'
        case 'ASSESS_CLASS_RECORD':
          return '文明班级'
        case 'ASSESS_INSPECT_RECORD':
          return '到岗情况'
        case 'ASSESS_SANITATION':
          return '卫生检查'
        case 'ASSESS_STAFF':
          return '各线考核'
        case 'TEACHER_APPLY':
          return '教师应聘信息'
        case 'TEACHER_ASSESS':
          return '教师学工考评'
        case 'TEACHER':
          return '教职工信息'
        default:
          return val
      }
    }
  },
  // ---------------- OperTargetType枚举  结束 -------------------

  // ---------------- PlatformType枚举  开始 -------------------
  PlatformType:{
    // 枚举列表
    list: [
      {label: '管理后台', value: 'BACKSTAGE'},
      {label: '企业微信', value: 'WX_CORP'},
      {label: 'PC端', value: 'PC_WEB'},
      {label: '微信公众号', value: 'WX_COMMON'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'BACKSTAGE':
          return '管理后台'
        case 'WX_CORP':
          return '企业微信'
        case 'PC_WEB':
          return 'PC端'
        case 'WX_COMMON':
          return '微信公众号'
        default:
          return val
      }
    }
  },
  // ---------------- PlatformType枚举  结束 -------------------

  // ---------------- OperType枚举  开始 -------------------
  OperType:{
    // 枚举列表
    list: [
      {label: '添加', value: 'ADD'},
      {label: '更新', value: 'UPDATE'},
      {label: '删除', value: 'DELETE'},
      {label: '查询', value: 'SEARCH'},
      {label: '禁用', value: 'DISABLE'},
      {label: '启用', value: 'ENABLE'},
      {label: '恢复', value: 'RECOVER'},
      {label: '录取', value: 'ENROLL'},
      {label: '未录取', value: 'DISQUALIFY'},
      {label: '未分配', value: 'UNABSORBED'},
      {label: '未达标', value: 'NONE_QUALIFIED'},
      {label: '分配', value: 'DISTRIBUTION'},
      {label: '发送', value: 'SEND'},
      {label: '导入', value: 'IMPORT'},
      {label: '导出', value: 'EXPORT'},
      {label: '借出', value: 'LOAN'},
      {label: '归还', value: 'RETURN'},
      {label: '审核', value: 'AUDIT'},
      {label: '评分', value: 'SCORE'},
      {label: '置顶', value: 'TOP'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ADD':
          return '添加'
        case 'UPDATE':
          return '更新'
        case 'DELETE':
          return '删除'
        case 'SEARCH':
          return '查询'
        case 'DISABLE':
          return '禁用'
        case 'ENABLE':
          return '启用'
        case 'RECOVER':
          return '恢复'
        case 'ENROLL':
          return '录取'
        case 'DISQUALIFY':
          return '未录取'
        case 'UNABSORBED':
          return '未分配'
        case 'NONE_QUALIFIED':
          return '未达标'
        case 'DISTRIBUTION':
          return '分配'
        case 'SEND':
          return '发送'
        case 'IMPORT':
          return '导入'
        case 'EXPORT':
          return '导出'
        case 'LOAN':
          return '借出'
        case 'RETURN':
          return '归还'
        case 'AUDIT':
          return '审核'
        case 'SCORE':
          return '评分'
        case 'TOP':
          return '置顶'
        default:
          return val
      }
    }
  },
  // ---------------- OperType枚举  结束 -------------------

  // ---------------- MeetingStatus枚举  开始 -------------------
  MeetingStatus:{
    // 枚举列表
    list: [
      {label: '未召开', value: 'NOT_STARTED'},
      {label: '已召开', value: 'STARTED'},
      {label: '已取消', value: 'CANCELED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NOT_STARTED':
          return '未召开'
        case 'STARTED':
          return '已召开'
        case 'CANCELED':
          return '已取消'
        default:
          return val
      }
    }
  },
  // ---------------- MeetingStatus枚举  结束 -------------------

  // ---------------- SchoolNoticeType枚举  开始 -------------------
  SchoolNoticeType:{
    // 枚举列表
    list: [
      {label: '通知公告', value: 'NOTICE'},
      {label: '学校规章', value: 'SCHOOL_RULE'},
      {label: '家长通知', value: 'PATRIARCH_NOTICE'},
      {label: '活动', value: 'ACTIVITY'},
      {label: '课题研究', value: 'SUBJECT_STUDY'},
      {label: '教师培训', value: 'TEACHER_TRAIN'},
      {label: '奥赛培训', value: 'OLYMPICS_TRAIN'},
      {label: '教研团队', value: 'TEACH_GROUP'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NOTICE':
          return '通知公告'
        case 'SCHOOL_RULE':
          return '学校规章'
        case 'PATRIARCH_NOTICE':
          return '家长通知'
        case 'ACTIVITY':
          return '活动'
        case 'SUBJECT_STUDY':
          return '课题研究'
        case 'TEACHER_TRAIN':
          return '教师培训'
        case 'OLYMPICS_TRAIN':
          return '奥赛培训'
        case 'TEACH_GROUP':
          return '教研团队'
        default:
          return val
      }
    }
  },
  // ---------------- SchoolNoticeType枚举  结束 -------------------

  // ---------------- ScopeType枚举  开始 -------------------
  ScopeType:{
    // 枚举列表
    list: [
      {label: '机构', value: 'ORGANIZATION'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ORGANIZATION':
          return '机构'
        default:
          return val
      }
    }
  },
  // ---------------- ScopeType枚举  结束 -------------------

  // ---------------- SurveyQuestionType枚举  开始 -------------------
  SurveyQuestionType:{
    // 枚举列表
    list: [
      {label: '单选题', value: 'RADIO'},
      {label: '多选题', value: 'MULTIPLE'},
      {label: '填空题', value: 'COMPLETION'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'RADIO':
          return '单选题'
        case 'MULTIPLE':
          return '多选题'
        case 'COMPLETION':
          return '填空题'
        default:
          return val
      }
    }
  },
  // ---------------- SurveyQuestionType枚举  结束 -------------------

  // ---------------- CourseType枚举  开始 -------------------
  CourseType:{
    // 枚举列表
    list: [
      {label: '必修', value: 'REQUIRED'},
      {label: '选修', value: 'OPTIONAL'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'REQUIRED':
          return '必修'
        case 'OPTIONAL':
          return '选修'
        default:
          return val
      }
    }
  },
  // ---------------- CourseType枚举  结束 -------------------

  // ---------------- GroupMode枚举  开始 -------------------
  GroupMode:{
    // 枚举列表
    list: [
      {label: '抽题组卷', value: 'RANDOM'},
      {label: '选题组卷', value: 'SELECT'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'RANDOM':
          return '抽题组卷'
        case 'SELECT':
          return '选题组卷'
        default:
          return val
      }
    }
  },
  // ---------------- GroupMode枚举  结束 -------------------

  // ---------------- QuestionType枚举  开始 -------------------
  QuestionType:{
    // 枚举列表
    list: [
      {label: '选择题', value: 'SELECT'},
      {label: '填空题', value: 'BLANK'},
      {label: '作文题', value: 'COMPOSITION'},
      {label: '解答题', value: 'ANSWER'},
      {label: '词语填空', value: 'WORDS'},
      {label: '组合题', value: 'COMBINATION'},
      {label: '判断题', value: 'TRUEORFALSE'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'SELECT':
          return '选择题'
        case 'BLANK':
          return '填空题'
        case 'COMPOSITION':
          return '作文题'
        case 'ANSWER':
          return '解答题'
        case 'WORDS':
          return '词语填空'
        case 'COMBINATION':
          return '组合题'
        case 'TRUEORFALSE':
          return '判断题'
        default:
          return val
      }
    }
  },
  // ---------------- QuestionType枚举  结束 -------------------

  // ---------------- ReplyStatus枚举  开始 -------------------
  ReplyStatus:{
    // 枚举列表
    list: [
      {label: '未回复', value: 'NO_REPLY'},
      {label: '已回复', value: 'REPLIED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NO_REPLY':
          return '未回复'
        case 'REPLIED':
          return '已回复'
        default:
          return val
      }
    }
  },
  // ---------------- ReplyStatus枚举  结束 -------------------

  // ---------------- BatchStatus枚举  开始 -------------------
  BatchStatus:{
    // 枚举列表
    list: [
      {label: '已开启', value: 'OPEN'},
      {label: '已禁用', value: 'FORBID'},
      {label: '已结束', value: 'FINISH'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'OPEN':
          return '已开启'
        case 'FORBID':
          return '已禁用'
        case 'FINISH':
          return '已结束'
        default:
          return val
      }
    }
  },
  // ---------------- BatchStatus枚举  结束 -------------------

  // ---------------- ExamPurpose枚举  开始 -------------------
  ExamPurpose:{
    // 枚举列表
    list: [
      {label: '拆卷', value: 'UNREEL'},
      {label: '监考', value: 'INVIGILATE'},
      {label: '封袋', value: 'ENVELOPE'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNREEL':
          return '拆卷'
        case 'INVIGILATE':
          return '监考'
        case 'ENVELOPE':
          return '封袋'
        default:
          return val
      }
    }
  },
  // ---------------- ExamPurpose枚举  结束 -------------------

  // ---------------- AttachmentType枚举  开始 -------------------
  AttachmentType:{
    // 枚举列表
    list: [
      {label: '图片', value: 'IMAGE'},
      {label: '视频', value: 'VIDEO'},
      {label: '其他', value: 'OTHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'IMAGE':
          return '图片'
        case 'VIDEO':
          return '视频'
        case 'OTHER':
          return '其他'
        default:
          return val
      }
    }
  },
  // ---------------- AttachmentType枚举  结束 -------------------

  // ---------------- NoticeType枚举  开始 -------------------
  NoticeType:{
    // 枚举列表
    list: [
      {label: '招生通知', value: 'RECRUIT'},
      {label: 'Banner图', value: 'BANNER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'RECRUIT':
          return '招生通知'
        case 'BANNER':
          return 'Banner图'
        default:
          return val
      }
    }
  },
  // ---------------- NoticeType枚举  结束 -------------------

  // ---------------- StudentEnrollStatus枚举  开始 -------------------
  StudentEnrollStatus:{
    // 枚举列表
    list: [
      {label: '已录取', value: 'ENROLL'},
      {label: '未录取', value: 'DISQUALIFY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ENROLL':
          return '已录取'
        case 'DISQUALIFY':
          return '未录取'
        default:
          return val
      }
    }
  },
  // ---------------- StudentEnrollStatus枚举  结束 -------------------

  // ---------------- BusinessType枚举  开始 -------------------
  BusinessType:{
    // 枚举列表
    list: [
      {label: '招生通知', value: 'NOTICE'},
      {label: '考生信息', value: 'STUDENT'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NOTICE':
          return '招生通知'
        case 'STUDENT':
          return '考生信息'
        default:
          return val
      }
    }
  },
  // ---------------- BusinessType枚举  结束 -------------------

  // ---------------- InstitutionType枚举  开始 -------------------
  InstitutionType:{
    // 枚举列表
    list: [
      {label: '系统预置', value: 'SYSTEM'},
      {label: '自定义添加', value: 'CUSTOM'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'SYSTEM':
          return '系统预置'
        case 'CUSTOM':
          return '自定义添加'
        default:
          return val
      }
    }
  },
  // ---------------- InstitutionType枚举  结束 -------------------

  // ---------------- CulturalCourseName枚举  开始 -------------------
  CulturalCourseName:{
    // 枚举列表
    list: [
      {label: '总分', value: 'TOTAL'},
      {label: '语文', value: 'LANGUAGE'},
      {label: '数学', value: 'MATH'},
      {label: '英语', value: 'ENGLISH'},
      {label: '物理', value: 'PHYSICS'},
      {label: '化学', value: 'CHEMISTRY'},
      {label: '政治', value: 'POLITICS'},
      {label: '历史', value: 'HISTORY'},
      {label: '生物', value: 'BIOLOGY'},
      {label: '地理', value: 'GEOGRAPHY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'TOTAL':
          return '总分'
        case 'LANGUAGE':
          return '语文'
        case 'MATH':
          return '数学'
        case 'ENGLISH':
          return '英语'
        case 'PHYSICS':
          return '物理'
        case 'CHEMISTRY':
          return '化学'
        case 'POLITICS':
          return '政治'
        case 'HISTORY':
          return '历史'
        case 'BIOLOGY':
          return '生物'
        case 'GEOGRAPHY':
          return '地理'
        default:
          return val
      }
    }
  },
  // ---------------- CulturalCourseName枚举  结束 -------------------

  // ---------------- NationType枚举  开始 -------------------
  NationType:{
    // 枚举列表
    list: [
      {label: '汉族', value: 'HAN'},
      {label: '彝族', value: 'YI'},
      {label: '白族', value: 'BAI'},
      {label: '哈尼族', value: 'HANI'},
      {label: '傣族', value: 'DAI'},
      {label: '壮族', value: 'ZHUANG'},
      {label: '苗族', value: 'MIAO'},
      {label: '僳僳族', value: 'LISU'},
      {label: '回族', value: 'HUI'},
      {label: '拉祜族', value: 'LAHU'},
      {label: '佤族', value: 'VA'},
      {label: '纳西族', value: 'NAXI'},
      {label: '瑶族', value: 'YAO'},
      {label: '景颇族', value: 'JINGPO'},
      {label: '藏族', value: 'TIBETAN'},
      {label: '布朗族', value: 'BLANG'},
      {label: '布依族', value: 'BUYEI'},
      {label: '普米族', value: 'PUMI'},
      {label: '阿昌族', value: 'ACHANG'},
      {label: '怒族', value: 'NU'},
      {label: '基诺族', value: 'JINO'},
      {label: '蒙古族', value: 'MONGOL'},
      {label: '水族', value: 'SUI'},
      {label: '满族', value: 'MANCHU'},
      {label: '独龙族', value: 'DERUNG'},
      {label: '其他族', value: 'OTHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'HAN':
          return '汉族'
        case 'YI':
          return '彝族'
        case 'BAI':
          return '白族'
        case 'HANI':
          return '哈尼族'
        case 'DAI':
          return '傣族'
        case 'ZHUANG':
          return '壮族'
        case 'MIAO':
          return '苗族'
        case 'LISU':
          return '僳僳族'
        case 'HUI':
          return '回族'
        case 'LAHU':
          return '拉祜族'
        case 'VA':
          return '佤族'
        case 'NAXI':
          return '纳西族'
        case 'YAO':
          return '瑶族'
        case 'JINGPO':
          return '景颇族'
        case 'TIBETAN':
          return '藏族'
        case 'BLANG':
          return '布朗族'
        case 'BUYEI':
          return '布依族'
        case 'PUMI':
          return '普米族'
        case 'ACHANG':
          return '阿昌族'
        case 'NU':
          return '怒族'
        case 'JINO':
          return '基诺族'
        case 'MONGOL':
          return '蒙古族'
        case 'SUI':
          return '水族'
        case 'MANCHU':
          return '满族'
        case 'DERUNG':
          return '独龙族'
        case 'OTHER':
          return '其他族'
        default:
          return val
      }
    }
  },
  // ---------------- NationType枚举  结束 -------------------

  // ---------------- AgeLevel枚举  开始 -------------------
  AgeLevel:{
    // 枚举列表
    list: [
      {label: '25周岁以下', value: 'AGE_LOW_25'},
      {label: '25至30周岁', value: 'AGE_25_30'},
      {label: '31至40周岁', value: 'AGE_31_40'},
      {label: '41至50周岁', value: 'AGE_41_50'},
      {label: '50周岁以上', value: 'AGE_MORE_50'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'AGE_LOW_25':
          return '25周岁以下'
        case 'AGE_25_30':
          return '25至30周岁'
        case 'AGE_31_40':
          return '31至40周岁'
        case 'AGE_41_50':
          return '41至50周岁'
        case 'AGE_MORE_50':
          return '50周岁以上'
        default:
          return val
      }
    }
  },
  // ---------------- AgeLevel枚举  结束 -------------------

  // ---------------- ResidentType枚举  开始 -------------------
  ResidentType:{
    // 枚举列表
    list: [
      {label: '城市', value: 'CITY'},
      {label: '县城', value: 'COUNTY'},
      {label: '农村', value: 'VILLAGE'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'CITY':
          return '城市'
        case 'COUNTY':
          return '县城'
        case 'VILLAGE':
          return '农村'
        default:
          return val
      }
    }
  },
  // ---------------- ResidentType枚举  结束 -------------------

  // ---------------- EnrollType枚举  开始 -------------------
  EnrollType:{
    // 枚举列表
    list: [
      {label: '划片', value: 'PLACE'},
      {label: '外地', value: 'OTHER_PLACES'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'PLACE':
          return '划片'
        case 'OTHER_PLACES':
          return '外地'
        default:
          return val
      }
    }
  },
  // ---------------- EnrollType枚举  结束 -------------------

  // ---------------- SituationStatus枚举  开始 -------------------
  SituationStatus:{
    // 枚举列表
    list: [
      {label: '无', value: 'NONE'},
      {label: '父母双残', value: 'DISABILITY'},
      {label: '本地贫困户', value: 'POVERTY'},
      {label: '外地贫困户', value: 'OTHER_POVERTY'},
      {label: '区县贫困户', value: 'DISTRICT_POVERTY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NONE':
          return '无'
        case 'DISABILITY':
          return '父母双残'
        case 'POVERTY':
          return '本地贫困户'
        case 'OTHER_POVERTY':
          return '外地贫困户'
        case 'DISTRICT_POVERTY':
          return '区县贫困户'
        default:
          return val
      }
    }
  },
  // ---------------- SituationStatus枚举  结束 -------------------

  // ---------------- DisabilityStatus枚举  开始 -------------------
  DisabilityStatus:{
    // 枚举列表
    list: [
      {label: '无', value: 'NONE'},
      {label: '盲', value: 'BLIND'},
      {label: '聋哑', value: 'SURDIMUTISM'},
      {label: '智障', value: 'AMENTIA'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NONE':
          return '无'
        case 'BLIND':
          return '盲'
        case 'SURDIMUTISM':
          return '聋哑'
        case 'AMENTIA':
          return '智障'
        default:
          return val
      }
    }
  },
  // ---------------- DisabilityStatus枚举  结束 -------------------

  // ---------------- MigrantWorkType枚举  开始 -------------------
  MigrantWorkType:{
    // 枚举列表
    list: [
      {label: '纯打工', value: 'WAGE'},
      {label: '小本经营', value: 'SMALL_CAPITAL'},
      {label: '投资办厂', value: 'FACTORY'},
      {label: '其他', value: 'OTHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'WAGE':
          return '纯打工'
        case 'SMALL_CAPITAL':
          return '小本经营'
        case 'FACTORY':
          return '投资办厂'
        case 'OTHER':
          return '其他'
        default:
          return val
      }
    }
  },
  // ---------------- MigrantWorkType枚举  结束 -------------------

  // ---------------- PrizeLevel枚举  开始 -------------------
  PrizeLevel:{
    // 枚举列表
    list: [
      {label: '国家级', value: 'COUNTRY'},
      {label: '省级', value: 'PROVINCE'},
      {label: '市级', value: 'CITY'},
      {label: '县级', value: 'COUNTY'},
      {label: '区级', value: 'DISTRICT'},
      {label: '校级', value: 'SCHOOL'},
      {label: '其他', value: 'OTHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'COUNTRY':
          return '国家级'
        case 'PROVINCE':
          return '省级'
        case 'CITY':
          return '市级'
        case 'COUNTY':
          return '县级'
        case 'DISTRICT':
          return '区级'
        case 'SCHOOL':
          return '校级'
        case 'OTHER':
          return '其他'
        default:
          return val
      }
    }
  },
  // ---------------- PrizeLevel枚举  结束 -------------------

  // ---------------- AuditStatus枚举  开始 -------------------
  AuditStatus:{
    // 枚举列表
    list: [
      {label: '未审核', value: 'UNAUDITED'},
      {label: '全部通过', value: 'PASS'},
      {label: '部分通过', value: 'PART_PASS'},
      {label: '未通过', value: 'NOT_PASS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNAUDITED':
          return '未审核'
        case 'PASS':
          return '全部通过'
        case 'PART_PASS':
          return '部分通过'
        case 'NOT_PASS':
          return '未通过'
        default:
          return val
      }
    }
  },
  // ---------------- AuditStatus枚举  结束 -------------------

  // ---------------- ChangeType枚举  开始 -------------------
  ChangeType:{
    // 枚举列表
    list: [
      {label: '姓名', value: 'NAME'},
      {label: '身份证号', value: 'ID_CARD'},
      {label: '户口性质', value: 'RESIDENT'},
      {label: '政治面貌', value: 'POLITICS'},
      {label: '家庭住址', value: 'ADDRESS'},
      {label: '父亲', value: 'FATHER'},
      {label: '母亲', value: 'MOTHER'},
      {label: '监护人', value: 'GUARDIAN'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'NAME':
          return '姓名'
        case 'ID_CARD':
          return '身份证号'
        case 'RESIDENT':
          return '户口性质'
        case 'POLITICS':
          return '政治面貌'
        case 'ADDRESS':
          return '家庭住址'
        case 'FATHER':
          return '父亲'
        case 'MOTHER':
          return '母亲'
        case 'GUARDIAN':
          return '监护人'
        default:
          return val
      }
    }
  },
  // ---------------- ChangeType枚举  结束 -------------------

  // ---------------- CheckStatus枚举  开始 -------------------
  CheckStatus:{
    // 枚举列表
    list: [
      {label: '未审核', value: 'UNAUDITED'},
      {label: '已通过', value: 'PASS'},
      {label: '未通过', value: 'NOT_PASS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'UNAUDITED':
          return '未审核'
        case 'PASS':
          return '已通过'
        case 'NOT_PASS':
          return '未通过'
        default:
          return val
      }
    }
  },
  // ---------------- CheckStatus枚举  结束 -------------------

  // ---------------- TransactionType枚举  开始 -------------------
  TransactionType:{
    // 枚举列表
    list: [
      {label: '外地转入', value: 'OTHER_CITY_INTO'},
      {label: '转出市外', value: 'OTHER_CITY_OUT'},
      {label: '市内转入', value: 'CITY_INTO'},
      {label: '市内转出', value: 'CITY_OUT'},
      {label: '县区内转入', value: 'DISTRICTS_INTO'},
      {label: '县区内转出', value: 'DISTRICTS_OUT'},
      {label: '休学', value: 'QUIT_SCHOOL'},
      {label: '复学', value: 'REENTRY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'OTHER_CITY_INTO':
          return '外地转入'
        case 'OTHER_CITY_OUT':
          return '转出市外'
        case 'CITY_INTO':
          return '市内转入'
        case 'CITY_OUT':
          return '市内转出'
        case 'DISTRICTS_INTO':
          return '县区内转入'
        case 'DISTRICTS_OUT':
          return '县区内转出'
        case 'QUIT_SCHOOL':
          return '休学'
        case 'REENTRY':
          return '复学'
        default:
          return val
      }
    }
  },
  // ---------------- TransactionType枚举  结束 -------------------

  // ---------------- MaritalStatus枚举  开始 -------------------
  MaritalStatus:{
    // 枚举列表
    list: [
      {label: '未婚', value: 'SINGLE'},
      {label: '已婚', value: 'MARRIED'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'SINGLE':
          return '未婚'
        case 'MARRIED':
          return '已婚'
        default:
          return val
      }
    }
  },
  // ---------------- MaritalStatus枚举  结束 -------------------

  // ---------------- TeacherQualification枚举  开始 -------------------
  TeacherQualification:{
    // 枚举列表
    list: [
      {label: '初中', value: 'JUNIOR'},
      {label: '高中', value: 'SENIOR'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'JUNIOR':
          return '初中'
        case 'SENIOR':
          return '高中'
        default:
          return val
      }
    }
  },
  // ---------------- TeacherQualification枚举  结束 -------------------

  // ---------------- ComputerLevel枚举  开始 -------------------
  ComputerLevel:{
    // 枚举列表
    list: [
      {label: '全国计算机一级', value: 'GRADE_ONE'},
      {label: '全国计算机二级', value: 'GRADE_TWO'},
      {label: '全国计算机三级', value: 'GRADE_THREE'},
      {label: '全国计算机四级', value: 'GRADE_FOUR'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'GRADE_ONE':
          return '全国计算机一级'
        case 'GRADE_TWO':
          return '全国计算机二级'
        case 'GRADE_THREE':
          return '全国计算机三级'
        case 'GRADE_FOUR':
          return '全国计算机四级'
        default:
          return val
      }
    }
  },
  // ---------------- ComputerLevel枚举  结束 -------------------

  // ---------------- MandarinLevel枚举  开始 -------------------
  MandarinLevel:{
    // 枚举列表
    list: [
      {label: '一级甲等', value: 'MANDARIN_LEVEL_ONE_A'},
      {label: '一级乙等', value: 'MANDARIN_LEVEL_ONE_B'},
      {label: '二级甲等', value: 'MANDARIN_LEVEL_TWO_A'},
      {label: '二级乙等', value: 'MANDARIN_LEVEL_TWO_B'},
      {label: '三级甲等', value: 'MANDARIN_LEVEL_THREE_A'},
      {label: '三级乙等', value: 'MANDARIN_LEVEL_THREE_B'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'MANDARIN_LEVEL_ONE_A':
          return '一级甲等'
        case 'MANDARIN_LEVEL_ONE_B':
          return '一级乙等'
        case 'MANDARIN_LEVEL_TWO_A':
          return '二级甲等'
        case 'MANDARIN_LEVEL_TWO_B':
          return '二级乙等'
        case 'MANDARIN_LEVEL_THREE_A':
          return '三级甲等'
        case 'MANDARIN_LEVEL_THREE_B':
          return '三级乙等'
        default:
          return val
      }
    }
  },
  // ---------------- MandarinLevel枚举  结束 -------------------

  // ---------------- JobStatus枚举  开始 -------------------
  JobStatus:{
    // 枚举列表
    list: [
      {label: '离职', value: 'DIMISSION'},
      {label: '在职', value: 'SERVING'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'DIMISSION':
          return '离职'
        case 'SERVING':
          return '在职'
        default:
          return val
      }
    }
  },
  // ---------------- JobStatus枚举  结束 -------------------

  // ---------------- ActivityType枚举  开始 -------------------
  ActivityType:{
    // 枚举列表
    list: [
      {label: '教研活动', value: 'ACTIVITY_TEACH_GROUP'},
      {label: '备课活动', value: 'ACTIVITY_PREPARE_LESSONS'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'ACTIVITY_TEACH_GROUP':
          return '教研活动'
        case 'ACTIVITY_PREPARE_LESSONS':
          return '备课活动'
        default:
          return val
      }
    }
  },
  // ---------------- ActivityType枚举  结束 -------------------

  // ---------------- TeachGroupLeaderType枚举  开始 -------------------
  TeachGroupLeaderType:{
    // 枚举列表
    list: [
      {label: '教研组长', value: 'TEACH_GROUP_LEADER'},
      {label: '备课组长', value: 'LESSON_PREPARE_LEADER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'TEACH_GROUP_LEADER':
          return '教研组长'
        case 'LESSON_PREPARE_LEADER':
          return '备课组长'
        default:
          return val
      }
    }
  },
  // ---------------- TeachGroupLeaderType枚举  结束 -------------------

  // ---------------- TimetableType枚举  开始 -------------------
  TimetableType:{
    // 枚举列表
    list: [
      {label: '年级总课表', value: 'GRADE'},
      {label: '班级单课表', value: 'CLASS'},
      {label: '教师单课表', value: 'TEACHER'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'GRADE':
          return '年级总课表'
        case 'CLASS':
          return '班级单课表'
        case 'TEACHER':
          return '教师单课表'
        default:
          return val
      }
    }
  },
  // ---------------- TimetableType枚举  结束 -------------------

  // ---------------- DayOfWeek枚举  开始 -------------------
  DayOfWeek:{
    // 枚举列表
    list: [
      {label: '星期一', value: 'MONDAY'},
      {label: '星期二', value: 'TUESDAY'},
      {label: '星期三', value: 'WEDNESDAY'},
      {label: '星期四', value: 'THURSDAY'},
      {label: '星期五', value: 'FRIDAY'}
    ],
    // 查询条件列表
    allList:function(){
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName:function(val){
      switch (val) {
        case 'MONDAY':
          return '星期一'
        case 'TUESDAY':
          return '星期二'
        case 'WEDNESDAY':
          return '星期三'
        case 'THURSDAY':
          return '星期四'
        case 'FRIDAY':
          return '星期五'
        default:
          return val
      }
    }
  }
  // ---------------- DayOfWeek枚举  结束 -------------------

}
