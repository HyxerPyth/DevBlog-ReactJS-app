import React from "react";
import SelectionContainer from "../../components/Selection/SelectionContainer";

const SelectOption = (props) => {
    return (
        <SelectionContainer store={props.store}/>
    );
}

export default SelectOption;