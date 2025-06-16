

import useProduct from '../hooks/useProduct';

const withLoader = (WrappedComponent) => (props) => {
  const { loading, products, error } = useProduct(); 

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return <WrappedComponent {...props} products={products} />;
};

export default withLoader;
