import styled from '@emotion/styled';

const LoadingAnimation = styled.div`
  position: absolute;
  display: inline-block;
  width: 75px;
  height: 75px;
  border: 10px solid hotpink;
  border-color: hotpink transparent transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
    transform: rotate(360deg);
    }
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(245, 234, 234, 0.3);
`;

export {
  LoadingAnimation, Modal,
};
