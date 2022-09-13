// code your solution here
function superbowlWin(records){
    const found = records.find(record =>{
        console.log("record", record)
        return record.result === 'W'
    })

        console.log('found', found)
         if (found) {
            return found.year
         }
}