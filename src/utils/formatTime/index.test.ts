import { formatTime } from ".";

describe("FormatTime", () => {
  it("formats seconds less than a minute", () => {
    expect(formatTime(45)).toBe("00:45");
  });

  it("formats seconds equal to a minute", () => {
    expect(formatTime(60)).toBe("01:00");
  });

  it("formats seconds more than a minute", () => {
    expect(formatTime(90)).toBe("01:30");
  });

  it("formats seconds more than ten minutes", () => {
    expect(formatTime(720)).toBe("12:00");
  });

  it("formats seconds equal to an hour", () => {
    expect(formatTime(3600)).toBe("60:00");
  });
});
