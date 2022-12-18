import { PropTypes } from 'prop-types';
import { Button, ButtonWrapper } from 'index';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={() => onClick({ type: 'load-more' })}>Load More</Button>
    </ButtonWrapper>
  );
};

LoadMoreButton.propTypes = { onClick: PropTypes.func.isRequired };
