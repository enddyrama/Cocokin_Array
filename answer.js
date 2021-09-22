// const cocokin = (input) => {
//     let temp = ''
//     let newArray = []
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < input[i].length; j++) {
//             temp += input[i][j]
//         }
//         if (newArray.length == 0) {
//             newArray.push(temp)
//             temp = ''
//         }
//         for (let k = 0; k < newArray.length; k++){
//             if (input[i]==newArray[k]){
                
//             }
//         }
//     }
//     return newArray
// }

const cocokin = (input) => {
        let temp = ''
        let newArray = []
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (i !== j){
                    if (input[i]==input[j]){
                        if (newArray.length==0){
                            newArray.push(i)
                        }
                        
                        newArray.push(j)
                    }
                }
            }
            return newArray
    }
}

console.log(cocokin(['qwe', 'asd', 'asd', 'zxc', 'qwe', 'qwe', 'qwe']))