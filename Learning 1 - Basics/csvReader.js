var XLSX = require('xlsx');


function xlsxReader() {
    const path = "C:\\Users\\sunchauhan\\Desktop\\Approach_2.xlsx";
    var workbook = XLSX.readFile(path);
    var sheet_name_list = workbook.SheetNames;
    
    //var bandData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    var bandData1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
    var bandData2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
    var bandData3 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[3]]);
    var bandData4 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[4]]);
    
    Array.prototype.push.apply(bandData1, bandData2);
    Array.prototype.push.apply(bandData3, bandData4);
    Array.prototype.push.apply(bandData1, bandData3);

    console.log('Second sheet \n' + JSON.stringify(bandData1));
}

xlsxReader();