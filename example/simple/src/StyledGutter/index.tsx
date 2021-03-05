import Tile from '../Tile';
import './CustomGutter.css';
import ReactSplit, { SplitDirection } from '@devbookhq/react-split';

function StyledGutter() {
  return (
    <ReactSplit
      direction={SplitDirection.Horizontal}
      gutterClassName="custom-gutter-horizontal"
      draggerClassName="custom-dragger-horizontal"
    >
      <Tile/>
      <Tile/>
    </ReactSplit>
  );
}

export default StyledGutter;

