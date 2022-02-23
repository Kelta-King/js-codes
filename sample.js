
const requiredSort = (arr, entry1, entry2) => {

    // Creating the sorted array with first 2 entries
    let sorted_array = [entry1, entry2];

    // Removing entry1 and entry2 from the array
    // Getting first entry's index and then removing it 
    let index = arr.indexOf(entry1);
    if (index > -1) {
        arr.splice(index, 1);
    }

    // Getting second entry's index and then removing it
    index = arr.indexOf(entry2);
    if (index > -1) {
        arr.splice(index, 1);
    }

    // Now, we will first sort the arr and then mearge it with sorted_array
    arr.sort();

    // Mearging the array
    sorted_array = sorted_array.concat(arr);

    return (sorted_array);

}

var arr = ["MATLAB Distributed Computing Server", "MATLAB Drive", "MATLAB Production Server", "MATLAB Report Generator", "MATLAB Runtime Server", "MATLAB Web Server", "MATLAB Wireless Design Suite", "MatrixVB", "MMLE Identification Toolbox", "Model Predictive Control Toolbox", "Model-Based Calibration Toolbox", "Motorola DSP Developers Kit", "Mu-Analysis and Synthesis Toolbox","MATLAB", "Simulink", "Aerospace Blockset", "Aerospace Toolbox" ];
console.log("Before sorting: ", arr);
console.log("After sort: ", requiredSort(arr, "MATLAB", "Simulink"));
