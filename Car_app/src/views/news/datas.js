export const newTyps = [
  {title: '全部', value: 0},
  {title: '重要消息', value: 1},
  {title: '一般消息', value: 2},
  {title: '警告消息', value: 3},
]

export let newsInfo = [
  {
    title: "消息内容",
    value: "您有新工作了，需求分析文档 中 日常管理工作计划零件/总成工作。开发时间：2019-04-13 09:00至 2019-04-15 17:00",
    readonly: true,
    type: 'textarea'
  },
  {
   title: '项目：' ,
   value: "日常工作-软件开发部(2019)",
   readonly: true,
  },
  {
    title: '开发里程碑：' ,
    value: "软件部工作(1-12月)",
    readonly: true,
   },
   {
    title: '阶段：' ,
    value: "4月-12月",
    readonly: true,
   },
   {
    title: '专业：' ,
    value: "项目管理",
    readonly: true,
   },
   {
    title: '工作内容：' ,
    value: "软件日常工作",
    readonly: true,
   },
   {
    title: '输出物：' ,
    value: "需求分析文档",
    readonly: true,
   },
   {
    title: 'BOM：' ,
    value: "日常管理工作计划",
    readonly: true,
   },
   {
    title: '回复：' ,
    value: "",
    readonly: false,
    type: 'textarea',
    placeholder: "请回复"
   },
]