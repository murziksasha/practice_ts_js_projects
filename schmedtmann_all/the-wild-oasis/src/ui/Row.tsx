import styled, { css } from 'styled-components';

type Type = 'horizontal' | 'vertical';

interface RowProps {
  type?: Type;
}

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;

