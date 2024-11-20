import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOGIN_START = '[Auth_page] login start';
export const LOGIN_SUCCESS = '[Auth_page] login success';
export const LOGIN_FAIL = '[Auth_page] login fail';

export const SIGNUP_START = '[Auth_page] signup start';
export const SIGNUP_SUCCESS = '[Auth_page] signup success';

export const AUTO_LOGIN = '[Auth_page] auto login';

export const LOGOUT = '[Auth_page] logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const lognSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const loginFail = createAction(LOGIN_FAIL);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN);

export const logout = createAction(LOGOUT);
