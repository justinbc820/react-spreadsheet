import DataEditor from "./DataEditor";
import DataViewer from "./DataViewer";
import Spreadsheet from "./Spreadsheet";

export default Spreadsheet;

export { Cell } from './Cell';
export { default as ColumnIndicator } from './ColumnIndicator';
export { default as CornerIndicator } from './CornerIndicator';
export { default as HeaderRow } from './HeaderRow';
export { default as Row } from './Row';
export { default as RowIndicator } from './RowIndicator';
export { default as Table } from './Table';

export type { Props } from "./Spreadsheet";
export { Model, createFormulaParser } from "./engine";
export { createEmpty as createEmptyMatrix } from "./matrix";
export type { Matrix } from "./matrix";
export type { Point } from "./point";
export { PointRange } from "./point-range";
export {
	EmptySelection,
	EntireAxisSelection,
	EntireColumnsSelection,
	EntireRowsSelection,
	EntireSelection,
	EntireWorksheetSelection,
	InvalidIndexError,
	RangeSelection, Selection
} from "./selection";
export type {
	CellBase, CellChange, CellComponent, CellComponentProps, CellDescriptor, ColumnIndicatorComponent,
	ColumnIndicatorProps, CornerIndicatorComponent,
	CornerIndicatorProps, DataEditorComponent, DataEditorProps, DataViewerComponent, DataViewerProps, Dimensions, HeaderRowComponent, HeaderRowProps, Mode, RowComponent, RowIndicatorComponent,
	RowIndicatorProps, RowProps,
	TableComponent,
	TableProps
} from "./types";
export { DataEditor, DataViewer, Spreadsheet };

