// Importa las funciones de medición de web vitals
import { ReportHandler } from 'web-vitals';

// Definición del tipo para la función reportWebVitals
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  // Verifica si onPerfEntry es una función
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinámicamente el módulo 'web-vitals' y llama a las funciones de medición de rendimiento
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
