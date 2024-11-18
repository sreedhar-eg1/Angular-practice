import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOGIN_START = '[Auth_page] login start';
export const LOGIN_SUCCESS = '[Auth_page] login success';
export const LOGIN_FAIL = '[Auth_page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const lognSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>());

export const loginFail = createAction(LOGIN_FAIL);
