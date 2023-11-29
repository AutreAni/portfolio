import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


export default function PDFViewer() {
  const file = ('../../../Ani_Karapetyan.pdf');
  return (
    <Document file={file}>
      <Page
        pageNumber={1} />
    </Document>
  );
}