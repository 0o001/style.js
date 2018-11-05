const style = ( styles = {} ) => {

    let text = '';

    for(let key in styles) {

        text += key.replace(/([a-z])([A-Z])/g, '$1-$2')
                    .replace(/([A-Z])([A-Z])/g, '$1-$2')
                    .toLowerCase() + ':' + styles[key] + ';';

    }

    return text;

}