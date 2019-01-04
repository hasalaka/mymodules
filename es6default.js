export function calcuatebill (total, tax=0.1, tip=0.15){ //in this case if 'undefined' defaults to given values
    return total + total * tax + total * tip;
}

export const calcuatebill2 = (total, tax, tip) => {

    tax = tax || 0.1; //Catch here is if tax is passed as 0, its taken as false which result in 0.1 so be careful
    tip = tip || 0.15;

    return total + total * tax + total * tip;
}

export const calcuatebill3 = (total, tax, tip) => total + total * tax + total * tip