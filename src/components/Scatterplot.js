import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ScatterPlotChart({ data }) {
  // Konverter data for å passe ScatterChart hvis nødvendig
  // I dette tilfellet bruker vi samme datastruktur, men i en reell situasjon
  // kan du trenge å transformere dataen for å passe til punktdiagrammet
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="periode" name="Periode" />
        <YAxis 
          yAxisId="left" 
          orientation="left" 
          stroke="#8884d8" 
          name="Gjennomsnittlig hentetid (dager)" 
          dataKey="antallDager"
        />
        <YAxis 
          yAxisId="right" 
          orientation="right" 
          stroke="#82ca9d"
          name="Antall ikke hentet"
          dataKey="antallIkkeHentet"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter 
          yAxisId="left" 
          name="Gjennomsnittlig hentetid (dager)" 
          data={data} 
          fill="#8884d8" 
          dataKey="antallDager"
          shape="circle"
        />
        <Scatter 
          yAxisId="right" 
          name="Antall ikke hentet" 
          data={data} 
          fill="#82ca9d" 
          dataKey="antallIkkeHentet"
          shape="square"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default ScatterPlotChart;