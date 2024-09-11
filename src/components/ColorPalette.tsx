import React from 'react';
import styled from 'styled-components';

const PaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`;

const ColorCode = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
`;

interface Color {
  hex: string;
  rgb: string;
}

interface ColorPaletteProps {
  colors: Color[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text} to clipboard!`);
  };

  return (
    <PaletteContainer>
      {colors.map((color, index) => (
        <ColorSwatch key={index} color={color.hex}>
          <ColorCode onClick={() => copyToClipboard(color.hex)}>{color.hex}</ColorCode>
          <ColorCode onClick={() => copyToClipboard(color.rgb)}>{color.rgb}</ColorCode>
        </ColorSwatch>
      ))}
    </PaletteContainer>
  );
};

export default ColorPalette;
