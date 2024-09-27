import React from "react";
import '../admin/admin.scss'

class Admin extends React.Component {
    render() {
        return (
            <>
                <div className="container admin">
                    <h1>Admin</h1>

                    <div className="user">
                        <h3>User Table</h3>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Password</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Thành Trung</td>
                                    <td>ntt53203@gmail.com</td>
                                    <td>084547523645</td>
                                    <td>trung123</td>
                                    <td>
                                        <a className="btn btn-danger">Xóa</a>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr></hr>

                    <div className="buyticket">
                        <h3>Buy Ticket Table</h3>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Number</th>
                                    <th>Price</th>
                                    <th>Id_user</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>087522</td>
                                    <td>1.0</td>
                                    <td>1</td>
                                    <td>22/11/2022</td>
                                    <td><a className="btn btn-danger">Xóa</a></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr></hr>

                    <div className="numbergen">
                            <h3>Numbergen Table</h3>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Number</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>659653</td>
                                    <td>11/11/2011</td>
                                    <td><a className="btn btn-danger">Xóa</a></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </>

        )

    }
};
export default Admin;