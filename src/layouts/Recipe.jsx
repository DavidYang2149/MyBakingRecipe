import styled from '@emotion/styled';

const Label = styled.label`
  display: ${(props) => props.display};
  font-size: 1.1rem;
  font-weight: 700;
  min-width: 100px;
  width: ${(props) => props.width};
  margin: 0.125rem;
  padding: 0.75rem;
`;

const Input = styled.input`
  color: #000;
  display: ${(props) => props.display};
  min-width: 100px;
  width: ${(props) => props.width};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  height: 24px;
  margin: 0.5rem;
  padding: 0.75rem;
`;

const Select = styled.select`
  color: #000;
  min-width: 100px;
  width: ${(props) => props.width};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  height: 48px;
  margin: 0.5rem;
  padding: 0.75rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Textarea = styled.textarea`
  color: #000;
  min-width: 300px;
  min-height: 200px;
  width: 70%;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  margin: 0.5rem;
  padding: 0.75rem;
`;

const Button = styled.button`
  color: #361d74;
  padding: 5px 7px;
  font-size: 1.025rem;
  font-weight: 600;
  background: transparent;
  border-radius: 6px;
  border-color: #361d74;
  cursor: pointer;
  margin: 10px;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

export {
  Label,
  Input,
  Select,
  Span,
  Textarea,
  Button,
  Paragraph,
};
