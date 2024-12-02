import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "./Loader";

const Main = ({ rowData, currentPage, setCurrentPage, total, loading }) => {
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
    <div className="mt-4 min-h-screen md:col-span-9 row-span-10">
      <div className="hidden md:block bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-3/4">
        <div className="overflow-x-auto">
          {loading ? (
            <Loader />
          ) : (
            <>
              <table className="min-w-full bg-white">
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
            </>
          )}
        </div>
      </div>
      <div className="block md:hidden">
        {loading ? (
          <Loader />
        ) : (
          <>
            {rowData.length > 0 ? (
              rowData.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="bg-white shadow-md rounded-lg overflow-hidden mx-2 border border-gray-200 mb-4 p-4"
                >
                  {colDefs.map((col, colIndex) => (
                    <div key={colIndex} className="mb-2 grid grid-cols-2">
                      <span className="block text-sm font-medium text-gray-700">
                        {col.headerName}:
                      </span>
                      <span className="block text-sm text-gray-900">
                        : {row[col.field]}
                      </span>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-10">
                No data available
              </div>
            )}
          </>
        )}
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
