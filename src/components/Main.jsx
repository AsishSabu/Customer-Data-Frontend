import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Main = ({ rowData,currentPage,setCurrentPage,total }) => {
 const colDefs = [
    { field: "s_no", headerName: "S.No" },
    { field: "name_of_customer", headerName: "Customer Name" },
    { field: "email", headerName: "Email" },
    { field: "mobile_number", headerName: "Mobile Number" },
    { field: "dob", headerName: "Date of Birth" },
  ];
  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };
  return (
    <div className="mt-4  min-h-screen col-span-9">
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-3/4">
      <table className="min-w-full bg-white ">
        <thead className="bg-[#03346E] text-white">
          <tr>
            {colDefs.map((col, index) => (
              <th
                key={index}
                className="text-left px-6 py-3 text-sm font-medium uppercase tracking-wider"
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.length > 0 ? (
            rowData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {colDefs.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-3 text-sm text-gray-700 border-t border-gray-200"
                  >
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={colDefs.length}
                className="px-6 py-10 text-center text-gray-500 h-2/3"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="flex justify-center py-4">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(total / 10)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Main;
