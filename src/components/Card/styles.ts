import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 304px;
  min-height: 568px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px;

  position: relative;

  background: var(--primaryWhite);

  border-radius: 8px;

  transition: 0.2s;
  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: -0.005em;
    color: var(--gray700);

    strong {
      color: var(--gray900);
    }
  }
  h2 {
    width: 240px;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 0.875rem;

    color: var(--red500);
  }
  h4 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: -0.005em;
    text-decoration-line: line-through;

    color: var(--gray600);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
