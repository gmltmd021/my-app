import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'hong@gmail.com', name: '홍길동'},
        {email: 'lee@gmail.com', name: '이순신'},
        {email: 'sae@gmail.com', name: '세종대왕'},
        {email: 'khwang@gmail.com', name: '광개토대왕'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;