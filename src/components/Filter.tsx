import React, { ChangeEvent, useState, Dispatch } from "react";
import VehicleTypeSelect from "./VehicleTypeSelect";
import { VehicleType, Vehicle } from "../data/vehicles/contracts";
import { VehicleApi } from "../data/vehicles/api";
import { Input } from "@skbkontur/react-ui";

interface Filter {
    setVehicles: Dispatch<Vehicle[]>;
}

const Filter:React.FC<Filter> = ({setVehicles}) => {
    const [selectValue, setSelectValue] = useState<VehicleType | null>(null);
    const [inputValue, setinputValue] = useState<string>("");

    const handleSelectChange = (newType: VehicleType | null) => {
        setSelectValue(newType);
        setVehicles(VehicleApi.search({ title: inputValue, type: newType }));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setinputValue(value);
        setVehicles(VehicleApi.search({ title: value, type: selectValue }));
    };
    
    return (
        <div>
            <Input width={'70%'} placeholder="Поиск" onChange={handleInputChange} value={inputValue} />
            <VehicleTypeSelect value={selectValue} onChange={handleSelectChange} />
        </div>
    )
};

export default Filter;
