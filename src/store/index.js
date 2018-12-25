import {createStore} from 'redux';
//import { contacts } from './../data/static-data';
import reducer from '../reducer';

const store = createStore(reducer);
export default store;