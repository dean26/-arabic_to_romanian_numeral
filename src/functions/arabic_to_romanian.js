export default {

    convert_value:
        { 
            1000: 'M', 
            900: 'CM', 
            500: 'D', 
            400: 'CD', 
            100: 'C', 
            90: 'XC', 
            50: 'L', 
            40 : 'XL', 
            10: 'X', 
            9: 'IX',
            5: 'V',
            4: 'IV',
            1: 'I' 
        },



    convert(arabic) {
        if(arabic > 0){
            const keys = Object.keys(this.convert_value).reverse();
            let romanian = ''
            let l,j;
    
            for (let i in keys) {
                //console.log(keys[i], this.convert_value[keys[i]]);
                if(arabic >= keys[i]){
                    l = Math.floor(arabic / keys[i]);
                    arabic -= l * keys[i];
                    for(j = 1; j <= l; j++){
                        romanian += this.convert_value[keys[i]];
                    }
                }
            }
            return romanian;
        } else {
            return '';
        }
    }
}
