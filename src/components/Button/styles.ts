import styled from "@emotion/styled";

interface ContainerProps {
  isFavorite: boolean;
}

export const Container = styled.button<ContainerProps>`
  all: unset;

  cursor: pointer;

  max-width: 240px;
  max-height: 48px;

  padding: 12px 24px;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.isFavorite ? "var(--green100)" : "var(--green400)"};

  border-radius: 5px;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.005em;

  color: ${(props) =>
    props.isFavorite ? "var(--gray900)" : "var(--primaryWhite)"};

  transition: 0.2s;

  svg {
    font-size: 1.5rem;
    color: var(--gray900);
  }

  &:hover {
    background-color: var(--green600);
  }
`;
