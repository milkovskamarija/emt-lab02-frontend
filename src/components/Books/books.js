import React from "react";

const books = (props) => {
    return (
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Available Copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term:T) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.category}</td>
                                    <td>{term.author}</td>
                                    <td>{term.availableCopies}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default books;