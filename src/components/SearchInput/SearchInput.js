import React from 'react';
import { Input } from 'antd';
import {SearchDiv} from "./SearchInputStyle";
import {SearchOutlined} from "@ant-design/icons";

const SearchInput = ({city, handleChange, handleSubmit}) => {
    return (
        <SearchDiv onSubmit={handleSubmit}>
            <Input
                placeholder='Please Enter A City'
                value={city}
                onChange={handleChange}
                suffix={<SearchOutlined/>}
            />
        </SearchDiv>
    )
};

export default SearchInput;