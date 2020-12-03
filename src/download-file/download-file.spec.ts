import { DownloadFile } from './download-file';

describe("Util DownloadFile", () => {
  const content = Math.random().toString(36).substr(2, 10);
  const blob = new Blob([content], { type: "application/pdf" });
  blob["lastModifiedDate"] = new Date();
  blob["name"] = content;

  const file = blob as File;
  const anchor = document.createElement("a");

  it("should download file", () => {
    window.URL.createObjectURL = jest.fn().mockReturnValue(content);
    window.URL.revokeObjectURL = jest.fn();
    document.createElement = jest.fn().mockReturnValue(anchor);
    document.body.appendChild = jest.fn();
    anchor.click = jest.fn();
    anchor.remove = jest.fn();

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
});
