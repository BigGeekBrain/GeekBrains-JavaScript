function power( val, pow ){

    if (pow >= 2){
        return val * power( val, (pow -1) );
    }else if ( pow = 1 ){
        return val;
    }else if ( pow = 0 ){
    		return 1;
    }

}
console.log( power( 3, 3) );
