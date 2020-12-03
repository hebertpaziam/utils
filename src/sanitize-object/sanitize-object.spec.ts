import { SanitizeObject } from './sanitize-object';

describe("Util SanitizeObject", () => {
  let raw;
  let data;
  beforeEach(() => {
    raw = {
      date: new Date(),
      blob: new Blob(),
      falsy: false,
      truthy: true,
      null: null,
      undefined: undefined,
      emptyString: "",
      string: "lorem ipsum",
      function: () => {},
      empyObject: {},
    };

    data = { ...raw };
    data.firstChild = { ...raw };
    data.firstChild.secondChild = { ...raw };

    raw = SanitizeObject(raw);
    data = SanitizeObject(data);
  });

  afterEach(() => {
    expect(data.firstChild.secondChild).toStrictEqual({ ...raw });
    expect(data.firstChild).toStrictEqual({ ...raw, secondChild: { ...raw } });
  });

  it("should have properties with valid values", () => {
    expect(data).toHaveProperty("date");
    expect(data).toHaveProperty("blob");
    expect(data).toHaveProperty("falsy");
    expect(data).toHaveProperty("truthy");
    expect(data).toHaveProperty("emptyString");
    expect(data).toHaveProperty("string");
    expect(data).toHaveProperty("function");
  });

  it("should not have properties with null or undefined values", () => {
    expect(data).not.toHaveProperty("null");
    expect(data).not.toHaveProperty("undefined");
    expect(data).not.toHaveProperty("empyObject");
  });

  it("should not have properties in remove list", () => {
    raw["remove"] = true;
    data["remove"] = true;

    raw = SanitizeObject(raw, ["remove"]);
    data = SanitizeObject(data, ["remove"]);

    expect(data).not.toHaveProperty("remove");
  });

  it("should return same simple value", () => {
    expect(SanitizeObject(data.date)).toBe(data.date);
    expect(SanitizeObject(data.blob)).toBe(data.blob);
    expect(SanitizeObject(data.falsy)).toBe(data.falsy);
    expect(SanitizeObject(data.truthy)).toBe(data.truthy);
    expect(SanitizeObject(data.emptyString)).toBe(data.emptyString);
    expect(SanitizeObject(data.string)).toBe(data.string);
    expect(SanitizeObject(data.function)).toBe(data.function);
  });
});
