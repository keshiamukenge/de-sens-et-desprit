/**
* This function splits text from innerHTML based on regex. Then, it wrap sparated words with <span> except <br>
* Finally, it returns array of span
* @param {HTML element} element 
* @param {string} split This is separator for text (regex)
* @return {Array.<HTML element>} Array of span html element 
*/
module.exports = function(element,split) {
    const words = splitText(element.innerHTML.toString(),split);
    let str = '';
    words.forEach(function(line) {
        if (line.includes('<br>')>-1) {
            const lines = line.split('<br>');
            lines.forEach(function(line,id,arr) {
                str += (id>0) ? '<br>'+parseLine(line) : parseLine(line);
            });
        } else { 
            str += parseLine(line);
        }
    });
    element.innerHTML = str;
    return element.querySelectorAll('span');
};


/**
* This function split text into array including <br>
* @params {string} txt This is text that retrieved from html element 
* @params {string} split It is separator for text (regex)
* @return {Array.<string>} result of split using separator including <br>
*/
function splitText(txt,split) {
    const splits = txt.split('<br>');
    let arr = [];
    splits.forEach(function(item,id) {
        if (id>0) arr.push('<br>');
        arr = arr.concat(item.split(split));
    });
    return arr;
}
/**
* This function will wrap passed argument with <span> if passed argument is not empty, space, or <br>
* @params {string} line It is words that are separated by seprator 
* @return {string} it is either '', ' ', <br> , or <span>line<span>  
*/
function parseLine(line) {
    if  (line==='' || line===' ') {
        return line;
    } else {
        return (line==='<br>') ? '<br>' : '<span>'+line+'</span>'+((line.length>1)?' ':'');
    }
}