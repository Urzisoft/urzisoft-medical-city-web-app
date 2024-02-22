// PatientTable.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHeader,
    TableHeaderContent,
    TableHeaderRow,
} from './PatientTable.style';

const PatientTable = ({ data }: any) => {
    const keys = Object.keys(data[0]);
    const navigate = useNavigate();

    const redirectToDetailPage = (id: any) => {
        navigate(`/patientDetail/${id}`);
    };

    return (
        <Table>
            <TableHeaderContent>
                <TableHeaderRow>
                    {['#', ...keys, 'Actions'].map(
                        (item, index) =>
                            item !== 'medical_status' && item !== 'id' && <TableHeader key={index}>{item}</TableHeader>
                    )}
                </TableHeaderRow>
            </TableHeaderContent>
            <TableBody>
                {data.map((obj: any, index: any) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        {keys.map((item, index) => {
                            const value = obj[item];
                            if (item !== 'medical_status' && item !== 'id')
                                return <TableCell key={index}>{value}</TableCell>;
                        })}
                        <TableCell>
                            <button onClick={() => redirectToDetailPage(index + 1)}>View</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PatientTable;
