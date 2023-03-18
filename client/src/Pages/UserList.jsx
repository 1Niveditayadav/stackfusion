import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
const UserList = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/user-list')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.error('Error fetching users: ', error));
      }, []);
    return (
        <>
        <h2 className='text-center mt-5'>Users List</h2>
            <div className='container mt-5'>
            <Table
                hover
                responsive
                bordered
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            DOB
                        </th>
                        <th>
                            Mobile No
                        </th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user,index) => (
                    <tr key={user.id}>
                        <th scope="row">
                            {index+1}
                        </th>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.dob}
                        </td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
                    
                </tbody>
            </Table>
            </div>
        </>
    )
}

export default UserList