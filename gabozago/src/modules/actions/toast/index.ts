import { ReactNode } from 'react';
import { Action } from 'redux-actions';
import { ToastAlign, ToastType } from 'src/components/common/Toast';

export const ACTION_TOAST = {
  SET: 'ACTION_TOAST_SET',
  INIT: 'ACTION_TOAST_INIT'
}

export const toastAction = (param: {theme?: ToastType, textAlign?: ToastAlign, time?: number, isShow?:boolean, children?: ReactNode}):Action<any> => ({
  type: ACTION_TOAST.SET,
  payload: param
});

export const toastInit = ():Action<any> => ({
  type: ACTION_TOAST.INIT,
  payload: {}
});