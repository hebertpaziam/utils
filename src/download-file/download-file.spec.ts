import { DownloadFile } from './download-file';

describe("Util DownloadFile", () => {
  const content = Math.random().toString(36).substr(2, 10);
  const blob = new Blob([content], { type: "application/pdf" });
  blob["lastModifiedDate"] = new Date();
  blob["name"] = content;

  const file = blob as File;
  const anchor = document.createElement("a");

  beforeEach(() => {
    window.URL.createObjectURL = jest.fn().mockReturnValue(content);
    window.URL.revokeObjectURL = jest.fn();
    document.createElement = jest.fn().mockReturnValue(anchor);
    document.body.appendChild = jest.fn();
    anchor.click = jest.fn();
    anchor.remove = jest.fn();
  });

  it("should download file from blob", () => {
    DownloadFile(file);

    expect(document.createElement).toHaveBeenCalledWith("a");
    expect(window.URL.createObjectURL).toHaveBeenCalledWith(file);
    expect(anchor.href).toContain(content);
    expect(anchor.target).toMatch("_blank");
    expect(anchor.download).toMatch(content);
    expect(document.body.appendChild).toHaveBeenCalledWith(anchor);
    expect(anchor.click).toHaveBeenCalled();
    expect(anchor.remove).toHaveBeenCalled();
    expect(window.URL.revokeObjectURL).toHaveBeenCalled();
  });

  it("should download file from path", () => {
    DownloadFile(content);
    expect(window.URL.createObjectURL).not.toHaveBeenCalled();
    expect(anchor.href).toContain(content);
  });

  it("should define param in url", () => {
    DownloadFile(content);
    expect(anchor.href).toMatch(
      `${content}?response-content-disposition=attachment`
    );
  });

  it("should add param in url", () => {
    DownloadFile(`${content}?param=true`);
    expect(anchor.href).toMatch(
      `${content}?param=true&response-content-disposition=attachment`
    );
  });
});
