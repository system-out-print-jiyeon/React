import { FC, ReactNode, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Toast.module.scss';

import IconClose from '../../svg/icon-close-16.svg';

const cx = classNames.bind(style);

export enum ToastType {
  DEFAULT = 'default',
  CLOSE = 'close',
}

export enum ToastAlign {
  DEFAULT = 'default',
  CENTER = 'center',
}

export interface IProps {
  theme?: ToastType;
  textAlign?: ToastAlign;
  toast?: any;
  closeToast?: any;
  time?: number;
  children: ReactNode;
}

const Toast: FC<IProps> = ({
  theme = ToastType.DEFAULT,
  textAlign = ToastAlign.DEFAULT,
  toast = true,
  closeToast,
  time = 3000,
  children,
}: IProps) => {
  //const [toastOn, setToastOn] = useState<boolean>(true);
  
  useEffect(()=>{
    if (toast === true) {
      setTimeout(()=>{ closeToast(); }, time);
    }
  }, [toast]);
  
  return (
    <div
      role="alert"
      className={cx(
        'toast_box',
        theme !== ToastType.DEFAULT && `${theme}`,
        textAlign !== ToastAlign.DEFAULT && `${textAlign}`,
        (!toast) && 'off',
        {/** (!toast || !toastOn) && 'off',*/}
      )}
    >
      <div className={cx('text')}>{children}</div>
      {theme === ToastType.CLOSE && (
        <button
          type="button"
          onClick={(e) => closeToast()}
          className={cx('btn_close')}
        >
          <img src={IconClose} alt="닫기" />
        </button>
      )}
    </div>
  );
};

export default Toast;
