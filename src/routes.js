import showTasks from './components/showTasks.vue'
import listMovies from './components/listOfMovies.vue'

export default [
    {path: '/', component: showTasks},
    {path: '/list', component: listMovies}
]