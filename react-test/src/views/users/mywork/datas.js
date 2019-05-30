export let taskList = [
  {
    title: "TonyTest项目02",
    key:1,
    BOM: 1,
    personCharge: "",
    workhours: '18.00',
    startTime: "2019-01-02 00:00",
    endTime: "2019-04-05 23:99",
    progress: "56",
    children: [
      {
        title: "【里程碑】概念开发",
        key:11,
        BOM: 0,
        personCharge: "",
        workhours: '18.00',
        startTime: "2019-02-19 00:00",
        endTime: "2019-04-06 23:99",
        progress: "56",
        eidtTitle: false,
        children: [
          {
            title: "【阶段】ME-DSI(立项建议书)",
            key:111,
            BOM: 0,
            personCharge: "",
            workhours: '18.00',
            startTime: "2019-02-19 00:00",
            endTime: "2019-04-06 23:99",
            progress: "56",
            eidtTitle: false,
            children: [
              {
                title: "【专业】冲压",
                key:1111,
                BOM: 0,
                personCharge: "娄茂昆",
                workhours: '18.00',
                startTime: "",
                endTime: "",
                progress: "56",
                eidtTitle: false,
                children: [
                  {
                    title: "【专业】冲压",
                    key:11111,
                    BOM: 0,
                    personCharge: "娄茂昆",
                    workhours: '18.00',
                    startTime: "",
                    endTime: "",
                    progress: "56",
                    eidtTitle: false,
                    children: [
                      {
                        title: "【工作内容】中长期生产对应方案的研究",
                        key:111111,
                        BOM: 0,
                        personCharge: "黄朝",
                        workhours: '18.00',
                        startTime: "",
                        endTime: "",
                        progress: "56",
                        eidtTitle: false,
                        children: [
                          {
                            title: "【输出物】中长期生产对应方案",
                            key:1111111,
                            BOM: 1,
                            personCharge: "孙天云",
                            workhours: '10.00',
                            startTime: "",
                            endTime: "",
                            progress: "56",
                            eidtTitle: false,
                          }
                        ]
                      },
                      {
                        title: "【工作内容】测试工作",
                        key:111112,
                        BOM: 1,
                        personCharge: "系统",
                        workhours: '18.00',
                        startTime: "",
                        endTime: "",
                        progress: "56",
                        eidtTitle: false,
                        children: [
                          {
                            title: "【输出物】测试工作1",
                            key:1111121,
                            BOM: 1,
                            personCharge: "系统",
                            workhours: '18.00',
                            startTime: "",
                            endTime: "",
                            progress: "56",
                            eidtTitle: false,
                          },
                          {
                            title: "【输出物】ceshu8",
                            key:1111122,
                            BOM: 1,
                            personCharge: "系统",
                            workhours: '18.00',
                            startTime: "",
                            endTime: "",
                            progress: "56",
                            eidtTitle: false,
                          },
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "【里程碑】概念开发",
        key:12,
        BOM: 1,
        personCharge: "",
        workhours: '18.00',
        startTime: "2019-01-02 00:00",
        endTime: "2019-04-05 23:99",
        progress: "56",
        eidtTitle: false,
      }
    ]
  }
]