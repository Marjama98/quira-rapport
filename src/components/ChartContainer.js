import React, { useState } from 'react';
import BarChartComponent from './Barchart'; // Din eksisterende komponent
import ScatterPlotChart from './ScatterPlotChart'; // Den nye komponenten vi opprettet
import './ChartContainer.css'; // Vi vil lage en stilfil for å style knappen

function ChartContainer({ data }) {
  // State for å holde styr på hvilket diagram som vises
  const [chartType, setChartType] = useState('bar');

  // Funksjon for å bytte diagram
  const toggleChartType = () => {
    setChartType(chartType === 'bar' ? 'scatter' : 'bar');
  };

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button 
          className="toggle-button" 
          onClick={toggleChartType}
        >
          {chartType === 'bar' ? 'Vis punktdiagram' : 'Vis stolpediagram'}
        </button>
      </div>
      
      <div className="chart-display">
        {chartType === 'bar' ? (
          <BarChartComponent data={data} />
        ) : (
          <ScatterPlotChart data={data} />
        )}
      </div>
    </div>
  );
}

export default ChartContainer;