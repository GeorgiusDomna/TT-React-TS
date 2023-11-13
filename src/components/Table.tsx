import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles } from "../data/vehicles/contracts";

interface TableItemProps {
    vehicle: Vehicle;
    number: number;
}

interface TableProps {
    vehicles: Vehicle[];
}

const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
        </tr>
    );
};

const Table: React.FC<TableProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена, ₽</th>
                <th>Тип ТС</th>
            </tr>
            </thead>
            <tbody>
                {vehicles.length ?
                    vehicles.map((x, i) => (
                    <TableItem key={x.id} number={i + 1} vehicle={x} />
                )) :
                <tr>
                    <td colSpan={4} align="center">Совпадений не найдено.</td>
                </tr>}
            </tbody>
        </table>
    );
};

export default Table;
