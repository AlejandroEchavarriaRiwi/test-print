import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Ajustamos el tamaño de la página a 80mm de ancho y 200mm de alto, que es común para las impresoras térmicas
const styles = StyleSheet.create({
  page: { 
    padding: 10, 
    width: '80mm',  // Ancho fijo de 80mm
    height: '200mm', // Altura fija, ajusta según tus necesidades
    flexDirection: 'column',
  },
  title: { 
    fontSize: 6, // Ajuste del tamaño de fuente
    marginBottom: 8, 
    textAlign: 'center',
  },
  field: { 
    marginBottom: 5, 
  },
  label: { 
    fontWeight: 'bold', 
    fontSize: 4, // Tamaño de fuente reducido para impresoras térmicas
  },
  value: {
    fontSize: 4,
  }
});

const PDFDocument = ({ formData }) => (
  <Document>
    {/* Tamaño fijo para la página para que coincida con una impresora térmica de 80mm */}
    <Page size={{ width: 80, height: 200 }} style={styles.page}>
      <Text style={styles.title}>Datos del formulario</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{formData.name}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{formData.email}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Mensaje:</Text>
        <Text style={styles.value}>{formData.message}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
