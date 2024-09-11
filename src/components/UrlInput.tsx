import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 300px;
  margin-right: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

interface UrlInputProps {
  onSubmit: (url: string) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          required
        />
        <Button type="submit">Extract Colors</Button>
      </form>
    </InputContainer>
  );
};

export default UrlInput;
