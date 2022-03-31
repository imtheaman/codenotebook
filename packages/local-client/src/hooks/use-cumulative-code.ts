import { Id } from "../state/cell.type";
import { useTypedSelector } from "./use-typed-selector";

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((rootState: any) => {
    const { data, order } = rootState.cells;

    const orderedCells = order.map((id: Id) => data[id]);

    const showFunc = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';
    var show = (value) => {
        const root = document.querySelector('#root');

        if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
                _ReactDOM.render(value, root)
            } else {
                root.innerHTML += JSON.stringify(value);
            } 
        } else {
                root.innerHTML += value;
        }
    };
    `;

    const NotShowFunc = "var show = () => {}";
    const cumulativeCode = [];
    for (let cell of orderedCells) {
      if (cell.type === "code") {
        if (cell.id === cellId) {
          cumulativeCode.push(showFunc);
          cumulativeCode.push(cell.content);
          break;
        } else {
          cumulativeCode.push(NotShowFunc);
          cumulativeCode.push(cell.content);
        }
      }
    }
    return cumulativeCode;
  }).join("\n");
};
