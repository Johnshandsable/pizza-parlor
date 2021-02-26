import {useSelector} from 'react-redux';


// customer_name,
//         street_address,
//         city,
//         zip,
//         type,
//         total,
//         time,



function AdminOrders(){

  const getOrder = () => {
    axios.get('/api/order')
    .then(response => {
      console.log('in get order,', response.data)
dispatch({
type: 'SET_ORDER', 
payload:response.data
})
    })
    .catch(err => console.log('error in get order', err))
  }

const orderList = useSelector(store => {
  return store.orderList;
})

return(
 
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Time Order was Placed</th>
        <th> Type</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      
        {/* <td> Chris | {person name here}  </td> */}
{orderList.map((order, index) => {
return( <tr><td>{order.name}</td>
  <td>{order.time}</td>
  <td>{order.type}</td></tr>
)
})}

<tr>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Sum</td>
        <td>$180</td>
      </tr>
    </tfoot>
  </table>



)

}
export default AdminOrders