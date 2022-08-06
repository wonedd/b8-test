import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ContainerProps {
  isHovering: boolean;
  isFavorite: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 48px;
  height: 48px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  background-color: var(--gray200);

  position: absolute;
  right: 32px;

  svg {
    font-size: 1.5rem;
    transform: scale(1.3);
  }

  ${(props) =>
    props.isFavorite
      ? css`
          background-color: var(--red500);
          svg {
            color: var(--primaryWhite);
          }
        `
      : props.isHovering &&
        css`
          background: var(--pink100);
          svg {
            color: var(--red500);
          }
        `}
  ${(props) =>
    props.isHovering &&
    props.isFavorite &&
    css`
      background: var(--red600);
      svg {
        color: var(--primaryWhite);
      }
    `}
`;
