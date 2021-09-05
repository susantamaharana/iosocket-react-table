const DataGrid = ({ data }) => {

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Exp Date</th>
          <th scope="col">ATM</th>
          <th scope="col">25D R/R</th>
          <th scope="col">10d R/R</th>
          <th scope="col">25d B/F</th>
          <th scope="col">10d B/F</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={item.time + Math.random()}>
                <td>{item.time}</td>
                <td>{item.expdate}</td>
                <td>{item.atm}</td>
                <td>{item.drr25}</td>
                <td>{item.drr10}</td>
                <td>{item.dbf25}</td>
                <td>{item.dbf10}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default DataGrid
