import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 304px;
  min-height: 568px;

  display: flex;
  flex-direction: column;

  gap: 32px;

  padding: 32px;

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
  max-width: 240px;
  max-height: 240px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  gap: 24px;
`;
