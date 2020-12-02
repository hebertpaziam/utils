export const DownloadFile = (source: string | Blob, fileName?: string) => {
  const anchorElem = document.createElement('a');
  const url = source instanceof Blob ? window.URL.createObjectURL(source) : source;
  anchorElem.href = url + '&response-content-disposition=attachment';
  anchorElem.target = '_blank';
  anchorElem.download = source['name'] || fileName || '';
  document.body.appendChild(anchorElem);
  anchorElem.click();
  anchorElem.remove();
  window.URL.revokeObjectURL(url);
};
