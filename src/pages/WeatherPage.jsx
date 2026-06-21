import React from 'react';
import PageLayout from '../components/PageLayout';
import WeatherForecaster from '../components/WeatherForecaster';

export default function WeatherPage() {
  return (
    <PageLayout>
      <main>
        <WeatherForecaster />
      </main>
    </PageLayout>
  );
}
