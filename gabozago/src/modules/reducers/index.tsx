import { combineReducers } from 'redux';
import moment from 'moment';
import { Action } from 'redux-actions';
import { ToastAlign, ToastType } from 'src/components/common/Toast';
import { ACTION_TOAST } from 'src/modules/actions/toast';

/* init value */
const timerState = {
  inputTime: '',
  hour: '',
  minute: '',
  second: ''
}

const modalState = {modal : true};

const initialState = {
  theme: ToastType.DEFAULT,
  textAlign: ToastAlign.CENTER,
  time: 3000,
  isShow: false
};

/* 리듀서 생성 */
function inputReducer(state = timerState, action: { type: string; payload: string; }){

  if(action.type == 'tossInputTime'){
    const custInputTime = action.payload+":00";
    const t1 = moment();                            // 현재시간
    const t2 = moment(custInputTime, "HH:mm:ss");   // 입력시간

    const diffHour = moment.duration(t2.diff(t1)).hours();
    const diffMinute = moment.duration(t2.diff(t1)).minutes();
    const diffSecond = moment.duration(t2.diff(t1)).seconds();

    state.inputTime = action.payload;
    state.hour = diffHour < 10 ? "0"+diffHour : ""+diffHour;
    state.minute = diffMinute < 10 ? "0"+diffMinute : ""+diffMinute;
    state.second = diffSecond < 10 ? "0"+diffSecond : ""+diffSecond;

  }
  return state;
}

function modalReducer(state = modalState, action: {type: string; payload: boolean}){
  if(action.type == 'modalOpen'){
    state.modal = action.payload;
  }else{
    state.modal = action.payload;
  }
  return state;
}

const toastReducer = (state = initialState , action: Action<any>) => {
  switch (action.type) {
    case ACTION_TOAST.SET:
      return {
        ...state, 
        ...action.payload,
      };
    case ACTION_TOAST.INIT:
        return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
    inputReducer: inputReducer,
    modalReducer: modalReducer,
    toastReducer: toastReducer
}); 

export default reducer

export type RootState = ReturnType<typeof reducer>;


