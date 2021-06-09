import { createContext, useContext } from 'react';
import EntityStore from './entityStore';

interface Store {
  //gets in the EntityStore class
  entityStore: EntityStore;
}

//export the EntityStore class as a store
export const store: Store = {
  //create a new instance of the class
  entityStore: new EntityStore(),
};

//we then pass in our store to the react context
export const StoreContext = createContext(store);

//a custom react hook that allows use our stores in our components
export function useStore() {
  //also a react hook to use the
  return useContext(StoreContext);
}
