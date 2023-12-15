import { format } from 'date-fns';

const formatDate = (date)=> {
    const formattedDate = format(new Date(date), 'HH:mm dd/MM/yyyy');
    return formattedDate;
}

export default formatDate;