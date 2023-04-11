import {render, screen} from '@testing-library/react'
import "../setupTests";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from "../App.jsx";


test("should edit a cell and keep the edited value after pressing enter", async () => {
  render(<App />);

  expect(
    await screen.findByText("OldValue")
  ).toBeInTheDocument();

  const cell = document.querySelector(
    `[class*="ag-row-level-0"] [class*="ag-cell-value"]`
  );
  // one click to start editing the cell because in colDefs we have this: singleClickEdit: true,
  await userEvent.click(cell)
  const cellEdition = document.querySelector(
    `[class*="ag-row-level-0"] [class*="ag-text-field-input"]`
  );

  // Change cell value from OldValue to NewValue and press Enter.
  await userEvent.type(cellEdition, "NewValue{Enter}");

  expect(cell).toHaveValue("NewValue");
});