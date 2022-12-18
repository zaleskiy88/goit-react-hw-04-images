import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar, Container, ImageGallery } from 'index';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery searchQuery={query} />

      <Toaster position="top-right" />
    </Container>
  );
};
