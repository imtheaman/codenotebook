import { useActions } from "../hooks/use-actions";
import { Id } from "../state/cell.type";
import "./insert-cell.css";

interface Props {
  nextCellId: Id;
  forceVisible?: boolean
}

const InsertCell: React.FC<Props> = ({ forceVisible, nextCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`insert-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(nextCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(nextCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default InsertCell;
