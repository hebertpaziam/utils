export const PrintPDF = (source?: string) => {
  fetch(source)
    .then((res) => res.blob())
    .then((file) => {
      const url = window.URL.createObjectURL(file);
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    })
    .catch(() => window.open(source, "_blank"));
};
