export const Droppable = ({ children }) => children({
  draggableProps: {
    style: {},
  },
  innerRef: jest.fn(),
}, {});

export const Draggable = ({ children }) => children({
  draggableProps: {
    style: {},
  },
  innerRef: jest.fn(),
}, {});

export const DragDropContext = ({ children }) => children;
