import { onMounted, onUnmounted, ref } from "vue"

const getMouseLocation = () => {
    {
        // 获取鼠标实时位置 - 需求
        const pageX = ref(0)
        const pageY = ref(0)
    
        const mouseMoveHandler = (e) => {
          let { pageX: x, pageY: y } = e
          console.log(x, y)
    
          pageX.value = x
          pageY.value = y
        }
    
        onMounted(() => {
          document.addEventListener('mousemove', mouseMoveHandler)
        })
    
        onUnmounted(() => {
          document.removeEventListener('mousemove', mouseMoveHandler)
        })
    
        return {
          pageX,
          pageY,
        }
      }
    }

export default getMouseLocation