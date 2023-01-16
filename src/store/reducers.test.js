import {
  advertCreatedSuccess,
  advertDeleteSuccess,
  advertsLoadedSuccess,
  authLogin,
  authLoginSuccess,
  authLogout,
  authLogoutSuccess,
  detailsLoadedSuccess,
  tagsLoadSuccess,
  uiResetError,
} from "./actions";
import { auth, defaultState, adverts, tags, ui } from "./reducers";

describe("auth", () => {
  test('should manage "AUTH_LOGIN_SUCCESS" action', () => {
    const state = true;
    const action = authLogin();
    const result = auth(state, action);
    expect(result).toBe(true);
  });
  test('should manage "AUTH_LOGOUT" action', () => {
    const state = false;
    const action = authLogout();
    const result = auth(state, action);
    expect(result).toBe(false);
  });
  test("Should manage any action", () => {
    const state = undefined;
    const action = { type: "ANY" };
    const result = auth(state, action);
    expect(result).toBe(defaultState.auth);
  });
});

describe("adverts", () => {
  const state = defaultState.adverts;
  test('Should manage "ADVERTS_LOADED_SUCCES" action', () => {
    const listAds = [{ id: 1 }, { id: 2 }];
    const action = advertsLoadedSuccess(listAds);
    const result = adverts(state, action);
    expect(result.data).toEqual(listAds);
    expect(result.areLoaded).toBe(true);
  });
  test('Should manage "ADVERT_CREATE_SUCCES" action', () => {
    const ad = { id: 1 };
    const action = advertCreatedSuccess(ad);
    const result = adverts(state, action);
    expect(result.data).toEqual([ad, ...state.data]);
    expect(result.areLoaded).toBe(state.areLoaded);
  });
  test('Should manage "DETAIL_LOADED_SUCCES" action', () => {
    const ad = { id: 1 };
    const action = detailsLoadedSuccess(ad);
    const result = adverts(state, action);
    expect(result.data).toEqual([ad]);
    expect(result.areLoaded).toBe(state.areLoaded);
  });
  test('Should manage "ADVERT_DELETE_SUCCESS" action', () => {
    const action = advertDeleteSuccess();
    const result = adverts(state, action);
    expect(result.data).toEqual(state.data);
    expect(result.areLoaded).toBe(false);
  });

  test('Should manage "ANY" action', () => {
    const action = "ANY";
    const state = undefined;
    const result = adverts(state, action);
    expect(result.data).toEqual(defaultState.adverts.data);
    expect(result.areLoaded).toBe(defaultState.adverts.areLoaded);
  });
});
describe("tags", () => {
  const state = defaultState.tags;
  test('Should manage "TAGS_LOAD_SUCCESS" action', () => {
    const listTags = ["motor", "work"];
    const action = tagsLoadSuccess(listTags);
    const result = tags(state, action);
    expect(result.data).toEqual(listTags);
    expect(result.areLoaded).toBe(true);
  });
  test('Should manage "ANY" action', () => {
    const state = undefined;
    const action = "ANY";
    const result = tags(state, action);
    expect(result.data).toEqual(defaultState.tags.data);
    expect(result.areLoaded).toBe(defaultState.tags.areLoaded);
  });
});

describe("user", () => {
  const state = defaultState.auth;
  test('Should manage "AUTH_LOGIN_SUCCES" action', () => {
    const action = authLoginSuccess();
    const result = auth(state, action);
    expect(result).toBe(true);
  });

  test('Should manage "AUTH_LOGOUT" action', () => {
    const action = authLogoutSuccess();
    const result = auth(state, action);
    expect(result).toBe(false);
  });

  test("Should manage any action", () => {
    const state = undefined;
    const action = { type: "ANY" };
    const result = auth(state, action);
    expect(result).toBe(defaultState.auth);
  });
});

describe("ui", () => {
  const state = defaultState.ui;
  test('Should manage "UI_RESET_ERROR" action', () => {
    const action = uiResetError();
    const result = ui(state, action);
    expect(result.error).toBeNull();
  });
});
