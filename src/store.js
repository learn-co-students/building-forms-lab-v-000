import {createStore} from 'redux';
import manageBand from './reducers/manageBand'

const store = createStore(manageBand)

export default store
