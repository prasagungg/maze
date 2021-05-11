const createMaze = (size) => {
    let result = '';

    for(let i = 1; i <= size; i++){

        if(i % 2 == 1) {

            for(j = 1; j<= size; j++){
                let notleft = i % 3 == 0 ? true : false;

                if (!notleft){
                    if( j == 2) {
                        result += ' ';
                    }else {
                        result += '@';
                    }
                } else {
                    if ( j == size - 1) {
                        result += ' ';
                    } else {
                        result += '@';
                    }
                }
            }

        }

        
        if(i % 2 == 0) {

            for(j = 1; j<= size; j++){
                if(j == 1){
                    result += '@';
                } else if (j > 1 && j < size){
                    result += ' ';
                } else {
                    result += '@';
                }
            }

        }

        result += '\n';
    }

    return result;
}

console.log(createMaze(15));