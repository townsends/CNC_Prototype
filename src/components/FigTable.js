import React from 'react';
import Table from 'react-bootstrap/Table'

function FigTable(props) {
    let table = FigTableInnerds(props.table);
    return (
        <div align = "center">
            {(props.table &&
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>
                            PageNo
                        </th>
                        <th>
                            Fig
                        </th>
                        <th>
                            Item
                        </th>
                        <th>
                            PartNo
                        </th>
                        <th>
                            Text
                        </th>
                        <th>
                            Eff
                        </th>
                        <th>
                            Qry
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {table.rows}
                </tbody>
            </Table>) || <p align = "center">No available Documents</p>}
        </div>
    );
}

function FigTableInnerds(ptable) {
    let table = ptable;
    let rows = table.map((data) =>
        <tr key={Math.random()}>
            <td>
                {data.PageNo}
            </td>
            <td>
                {data.Fig}
            </td>
            <td>
                {data.Item}
            </td>
            <td>
                {data.PartNo}
            </td>
            <td>
                {data.Text}
            </td>
            <td>
                {data.Eff}
            </td>
            <td>
                {data.Qry}
            </td>
        </tr>
    );
    return (
        {rows}
    )
}

export default FigTable;