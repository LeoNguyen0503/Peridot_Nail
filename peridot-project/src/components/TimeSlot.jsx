import {useEffect} from "react";


function TimeSlot( { selectedDate, setSelectedTime } ){

    useEffect(() => {
        console.log(selectedDate)
    },[selectedDate])

    return(
        <div>
            {selectedDate?.toLocaleDateString()}
        </div>
        
    )

}

export default TimeSlot;