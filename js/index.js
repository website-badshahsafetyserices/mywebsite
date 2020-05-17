window.onload = function() {

    // var ExcelToJSON = function() {

    //     this.parseExcel = function(file) {
    //         var reader = new FileReader();

    //         reader.onload = function(e) {
    //             var data = e.target.result;
    //             //var data = `https://drive.google.com/open?id=1A4YOIiJweVq5GiTxYhgh_CqXkatjOk3gMZFZV4jjL3w`;
    //             //var data = new Uint8Array(e.target.result);


    //             var workbook = XLSX.read(data, {
    //                 type: 'binary'
    //             });
    //             workbook.SheetNames.forEach(function(sheetName) {
    //                 // Here is your object
    //                 var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //                 var json_object = JSON.stringify(XL_row_object);
    //                 console.log(JSON.parse(json_object));
    //                 // jQuery('#xlx_json').val(json_object);
    //                 document.getElementById("xlx_json").textContent = json_object;
    //             })
    //         };

    //         reader.onerror = function(ex) {
    //             console.log(ex);
    //         };

    //         reader.readAsBinaryString(file);
    //     };
    // };

    // function handleFileSelect(evt) {

    //     var files = evt.target.files; // FileList object
    //     var xl2json = new ExcelToJSON();
    //     xl2json.parseExcel(files[0]);
    // }

    // document.getElementById('upload').addEventListener('change', handleFileSelect, false);




    /* this is second test code */


    // const input_file = "https://github.com/website-badshahsafetyserices/mywebsite/raw/master/badshahsafetyservices.xlsx"

    // //const input_file = "http://qcdn.panopath.com/test-2016-4-25.xlsx";

    // let oReq = new XMLHttpRequest();
    // oReq.open("GET", input_file);
    // oReq.responseType = "arraybuffer";
    // oReq.setRequestHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    // oReq.withCredentials = true;


    // oReq.onload = function(e) {
    //     let arraybuffer = oReq.response;
    //     /*             not responseText!!              */

    //     /* convert data to binary string */
    //     let data = new Uint8Array(arraybuffer);
    //     let arr = new Array();
    //     for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //     let bstr = arr.join("");
    //     /* Call XLSX */
    //     let workbook = XLSX.read(bstr, { type: "binary" });

    //     //rough start
    //     workbook.SheetNames.forEach(function(sheetName) {
    //         // Here is your object
    //         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //         var json_object = JSON.stringify(XL_row_object);
    //         console.log(JSON.parse(json_object));
    //         // jQuery('#xlx_json').val(json_object);
    //         let div = document.createElement('div');
    //         div.textContent = json_object;

    //         document.getElementById("xlx_json").appendChild(div);
    //     })


    //     //rough end



    //     // /* DO SOMETHING WITH workbook HERE */
    //     // let firstSheet = workbook.SheetNames[0];
    //     // //document.write(JSON.stringify(workbook));
    //     // //let parsed = XLSX.utils.sheet_to_csv(firstSheet);
    //     // let parsed = XLSX.utils.sheet_to_row_object_array(firstSheet);
    //     // document.getElementById("xlx_json").textContent = parsed;
    //     // console.log(parsed)

    // };

    // oReq.send();


    /* this is third code */

    var url = "badshahsafetyservices.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");

        /* Call XLSX */
        var workbook = XLSX.read(bstr, { type: "binary" });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));

        workbook.SheetNames.forEach(function(sheetName) {
            // Here is your object
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);
            console.log(JSON.parse(json_object));
            // jQuery('#xlx_json').val(json_object);
            let div = document.createElement('div');
            div.textContent = json_object;

            document.getElementById("xlx_json").appendChild(div);
        })





        // let div = document.createElement('div');
        // div.textContent = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        // document.getElementById("xlx_json").appendChild(div);

    }

    oReq.send();


}