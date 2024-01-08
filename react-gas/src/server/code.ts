export function doGet() {
  let sheet = SpreadsheetApp.getActive().getSheetByName("年間の家計簿"); 
  let template = HtmlService.createHtmlOutputFromFile("hosting/index.html");
  return template.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

interface SheetData {
  Total: string;
  Food: string;
  EatingOut: string;
  Rent: string;
  Gas: string;
  Electricity: string;
  Water: string;
  Gasoline: string;
  HouseholdGoods: string;
  Gifts: string;
  Insurance: string;
  Pets: string;
}

const getSheetData = (): SheetData => { 
  let month = new Date().getMonth()
  const sheet = SpreadsheetApp.getActiveSheet();
  return {
    Total: sheet.getRange(month + 4 ,15).getDisplayValue(),
    Food: sheet.getRange(month + 4 ,4).getDisplayValue(),
    EatingOut: sheet.getRange(month + 4 ,5).getDisplayValue(),
    Rent: sheet.getRange(month + 4 ,6).getDisplayValue(),
    Gas: sheet.getRange(month + 4 ,7).getDisplayValue(),
    Electricity: sheet.getRange(month + 4 ,8).getDisplayValue(),
    Water: sheet.getRange(month + 4 ,9).getDisplayValue(),
    Gasoline: sheet.getRange(month + 4 ,10).getDisplayValue(),
    HouseholdGoods: sheet.getRange(month + 4 ,11).getDisplayValue(),
    Gifts: sheet.getRange(month + 4 ,12).getDisplayValue(),
    Insurance: sheet.getRange(month + 4 ,13).getDisplayValue(),
    Pets: sheet.getRange(month + 4 ,14).getDisplayValue(),
  };
};

const sendData = (sheetName: string, money:string, column:string): void => {
  let month = new Date().getMonth()
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return;
  sheet.getRange(month + 4, Number(column)).setValue(Number(sheet.getRange(month + 4, Number(column)).getDisplayValue()) + Number(money));
};


export { getSheetData, sendData };