import React from "react"
import TimeLine from "react-gantt-timeline"

const config = {
  header: {
    top: {
      style: {
        background: "linear-gradient( grey, black)",
        textShadow: "0.5px 0.5px black",
        fontSize: 12
      }
    },
    middle: {
      style: {
        background: "linear-gradient( orange, grey)",
        fontSize: 9
      }
    },
    bottom: {
      style: {
        background: "linear-gradient( grey, black)",
        fontSize: 9,
        color: "orange"
      },
      selectedStyle: {
        background: "linear-gradient( #d011dd ,#d011dd)",
        fontWeight: "bold",
        color: "white"
      }
    }
  },
  taskList: {
    title: {
      label: "Task Todo",
      style: {
        background: "linear-gradient( grey, black)"
      }
    },
    task: {
      style: {
        backgroundColor: "grey",
        color: "white"
      }
    },
    verticalSeparator: {
      style: {
        backgroundColor: "#fbf9f9"
      },
      grip: {
        style: {
          backgroundColor: "red"
        }
      }
    }
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "white",
        borderBottom: "solid 0.5px silver",
      }
    },
    task: {
      showLabel: true,
      style: {
        borderRadius: 1,
        boxShadow: "2px 2px 8px #888888"
      }
    }
  }
};

let data=[
  {
    id:1,
    start:'2019-06-04', 
    end:'2019-06-20',
    name:'任务一',
    color: "red",
  },
  {
    id:2,
    start:'2019-05-01', 
    end:'2019-06-20',
    name:'任务二',
    color: "red",
  }
]
let links=[
  // {
  //   id:1,
  //   start:1, 
  //   end:200
  // },
  // {
  //   id:2,
  //   start:1, 
  //   end:300
  // }
]
class Mynews extends React.Component {

  onHorizonChange(){
    console.log(11)
  }

  render(){
    return (
      <div>
        <TimeLine 
          data={data} 
        />
      </div>
    )
  }
}

export default Mynews