const excelToJson = require('convert-excel-to-json');

export const fileToJson = (filePath: string | undefined): any => (
    excelToJson({
        sourceFile: filePath,
        sheets: ['Лист1']
    })
)