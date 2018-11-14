import Immutable from "seamless-immutable";
import { createTransform } from "redux-persist";

// the transform interface that redux-persist is expecting
function createImmutableTransform(blacklist) {
  return createTransform(
    (inboundState, key) => {
      if (inboundState.asMutable) {
        // creates an object from an immutable
        inboundState = inboundState.asMutable({ deep: true });
      }
      return inboundState;
    },
    (outboundState, key) => {
      // creates an immutable from an object
      outboundState = Immutable(outboundState);
      return outboundState;
    },
    // tells for which REDUCERS we do NOT want to have Immutuable filter aplied
    { blacklist: blacklist }
  );
}

export default createImmutableTransform;
