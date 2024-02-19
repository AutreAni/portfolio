export default function PDFViewer() {
  const file = ('../../../Ani_Karapetyan.pdf');
  return (
    <div
      style = {{width:"100%",height:"678px", overflow:"hidden",margin:0}}>
    <object
      data={file}
      type="application/pdf"
      width="100%"
      height={678}
    >
      <iframe
        title = "resume"
        src={file}
        width="100%"
        height={678}
      >
        &lt;p&gt;This browser does not support PDF!&lt;/p&gt;
      </iframe>
    </object>
  </div>
  );
}