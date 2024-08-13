export const validateExpirationDate = (value: string): string => {
    // Si el primer dígito del mes es mayor a '1', se añade un '0' al inicio
    if (value.length === 1 && parseInt(value[0]) > 1) value = "0" + value + "/";
    else if (value.length === 2) {
        // si hay 2 digitos valor maximo es 12
        if (parseInt(value) > 12) value = "12";
        value = value + "/";
    }
    return value;
};
