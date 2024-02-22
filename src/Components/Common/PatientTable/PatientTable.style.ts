import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: 2px;
    overflow: hidden;
`;

export const TableHeaderContent = styled.thead`
    position: sticky;
    z-index: 100;
`;

export const TableHeaderRow = styled.tr`
    background: white;
`;

export const TableHeader = styled.th`
    font-weight: normal;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;

    :not(:last-of-type) {
        border-right: 1px solid black;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
    background: white;
`;

export const TableCell = styled.td`
    padding: 2px;
    border: 1px solid black;
    font-size: 14px;
`;
