function formatValue(value: string | number |boolean){
    if (typeof value === "string"){
        return value.toUpperCase();
    }
    if (typeof value === "number"){
        return value * 10;
    }
    if (typeof value === "boolean"){
        return !value;
    }
    throw new Error("Unsupported type");
}

// console.log(formatValue("hello")); 
// console.log(formatValue(5));       
// console.log(formatValue(true)); 