const res = {}
import actionSheet from './actionsheet.vue'
res.install = function(Vue){
    Vue.component(actionSheet.name, actionSheet)
}


export default res
