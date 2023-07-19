import mitt from "mitt";
type Events = {
    receiveData:string
}

export default mitt<Events>()
// 创建一个实例,暴露出去,用这个实例进行跨组件间的通信