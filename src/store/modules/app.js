import Cookies from 'js-cookie'

const app ={
    state :{
        sidebar :{
            opende : !+Cookies.get('sidebarStatus')
        }
    },
    mutations:{
        TOGGLE_SIDEBAR :state =>{
            if(state.sidebar.opende){
                Cookies.set('sidebarStatus',1)
            }else{
                Cookies.set('sidebarStatus',0)
            }

            state.sidebar.opende =!state.sidebar.opende
        }
    },
    actions:{
        ToggleSideBar :({commit}) =>{
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default app