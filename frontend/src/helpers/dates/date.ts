export const convertToUSDate = (date: string) => {
    const newDate = new Date(date);
    
    return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`
}

export const convertToHours = (date: string) => {
    const newDate = new Date(date);
    
    let hours = newDate.getHours();
    let minutes: string | number = newDate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}