'use client'
import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

export default function PrintForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blob = await pdf(<PDFDocument formData={formData} />).toBlob();
      const url = URL.createObjectURL(blob);
      
      // Abre el PDF en una nueva pestaña
      window.open(url, '_blank');

      // Opcional: Liberar el objeto URL después de un breve retraso
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      alert("Hubo un error al generar el PDF. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Nombre" 
        />
        <input 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Mensaje" 
        />
        <button type="submit">Facturar</button>
      </form>
    </div>
  );
}