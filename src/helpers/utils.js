export const byteFormatTo=(bytes, precision, lang  )=>{
    const translate = {
        EN: [' KB', ' MB', ' GB', ' TB'],
        FA: [' کیلوبایت', ' مگابایت', ' گیگابایت', ' ترابایت']
    };
    if (Object.keys(translate).indexOf(lang)===-1) lang = 'FA';
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
    const gigabyte = megabyte * 1024;
    const terabyte = gigabyte * 1024;

    if( (bytes >= 0) && (bytes < kilobyte) ){
        return bytes + ' B';

    } else if( (bytes >= kilobyte) && (bytes < megabyte) ){
        return (bytes / kilobyte).toFixed( precision ) + translate[lang][0];

    } else if( (bytes >= megabyte) && (bytes < gigabyte) ){
        return (bytes / megabyte).toFixed( precision ) + translate[lang][1];

    } else if( (bytes >= gigabyte) && (bytes < terabyte) ){
        return (bytes / gigabyte).toFixed( precision ) + translate[lang][2];

    } else if( bytes >= terabyte ){
        return (bytes / terabyte).toFixed( precision ) + translate[lang][3];

    } else{
        return bytes + ' B';
    }
};