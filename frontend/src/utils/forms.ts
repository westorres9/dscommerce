export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: {...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
    const data: any = {};
    for(var name in inputs) {
        data[name] = inputs[name].value;
    }
    return data;
}

export function updateAll(inputs: any, newValues: any) {
    const newInputs:any = { };
    for (var name in inputs) {
        newInputs[name] = {...inputs[name], value:newValues[name] };
    }
    return newInputs;
}

export function validate(inputs: any, name: string) {

    if(!inputs[name].validation) {
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);

    return { ...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}}
}

export function toDirty(inputs: any, name: string) {
    return { ...inputs,[name]: { ...inputs[name], dirty: "true" } };
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
    const dataUpdated = update(inputs, name, newValue);
    const dataValidated = validate(dataUpdated, name);

    return dataValidated;
}

export function dirtyAndValidate(inputs: any, name: string) {
    const dataDirty = toDirty(inputs, name);
    const dataValidated = validate(dataDirty, name);

    return dataValidated;
}

export function toDirtyAll(inputs: any) {
    const newInputs: any ={};
    for(var name in inputs) {
        newInputs[name] = { ...inputs[name], dirty: "true"};
    }
    return newInputs;
}

export function validateAll(inputs: any) {
    const newInputs: any = {};

    for(var name in inputs) {
        if(inputs[name].validation) {
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() };
        }
        else {
            newInputs[name] = { ...inputs[name] }
        }
    }

    return newInputs;
}

export function setBackendErrors(inputs: any, errors: any[]) {
    const newInputs = {...inputs };
    errors.forEach(item => {
        newInputs[item.fieldName].message = item.message;
        newInputs[item.fieldName].dirty = "true";
        newInputs[item.fieldName].invalid = "true";
    });

    return newInputs;
}

export function dirtyAndValidateAll(inputs: any) {
    return validateAll(toDirtyAll(inputs));
}

export function hasAnyInvalid(inputs: any){
    for(var name in inputs) {
        if (inputs[name].dirty === "true" && inputs[name].invalid === "true") {
            return true
        }
    }
    return false;
}