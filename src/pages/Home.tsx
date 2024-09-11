import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import UrlInput from '../components/UrlInput';
import ColorPalette from '../components/ColorPalette';
import { extractColors } from '../services/api';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

interface Color {
  hex: string;
  rgb: string;
}

const Home: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const extractedColors = await extractColors(url);
      setColors(extractedColors);
    } catch (err) {
      setError('Failed to extract colors. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Container>
        <UrlInput onSubmit={handleSubmit} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {colors.length > 0 && <ColorPalette colors={colors} />}
      </Container>
    </div>
  );
};

export default Home;
