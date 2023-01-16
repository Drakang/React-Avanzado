import { getDetails, getIsLogged, getStateTags } from "./selectors";

describe("getDetails", () => {
  test("should return a advert by advertId", () => {
    const advertId = "1";
    const adverts = [{ id: advertId }];
    const state = { adverts: { data: adverts } };
    expect(getDetails(advertId)(state)).toBe(adverts[0]);
  });
  test("should not return any advert", () => {
    const advertId = "1";
    const adverts = [];
    const state = { adverts: { data: adverts } };
    expect(getDetails(advertId)(state)).toBe(undefined);
  });
});
test("should return tags", () => {
  const tags = ["lifestyle", "mobile", "motor", "work"];
  const state = { tags: { data: tags } };
  expect(getStateTags(state)).toEqual(["lifestyle", "mobile", "motor", "work"]);
});
describe("getIsLogged", () => {
  test('Should return "false"', () => {
    const state = { auth: false };
    const result = getIsLogged(state);
    expect(result).toBe(state.auth);
  });
});
