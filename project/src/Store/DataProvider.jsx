import { DataContext, data } from "./data-context";

export default function DataProvider(props) {
  return <DataContext.Provider value={data}>{props.children}</DataContext.Provider>;
}
