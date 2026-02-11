// ========================================
// GOOGLE APPS SCRIPT - VALENTINE'S DATA SAVER
// ========================================
// 
// This script saves Valentine's website data to a Google Sheet
// Follow the setup instructions in SETUP_INSTRUCTIONS.md
//
// ========================================

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),           // Timestamp
      data.recipientName || '',            // Recipient's Name
      data.senderName || '',               // Sender's Name
      data.phoneNumber || '',              // Phone Number
      new Date()                           // Server Timestamp
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Handle GET requests for testing
  return ContentService.createTextOutput('Valentine\'s Data Saver is running! Use POST to save data.');
}

function getOrCreateSheet() {
  const spreadsheetName = 'Valentine\'s Website Data';
  const sheetName = 'Responses';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  let spreadsheet;
  
  if (files.hasNext()) {
    // Spreadsheet exists, open it
    spreadsheet = SpreadsheetApp.open(files.next());
  } else {
    // Create new spreadsheet
    spreadsheet = SpreadsheetApp.create(spreadsheetName);
    
    // Get the default sheet and rename it
    const sheet = spreadsheet.getActiveSheet();
    sheet.setName(sheetName);
    
    // Add headers
    const headers = [
      'Timestamp',
      'Recipient Name',
      'Sender Name',
      'Phone Number',
      'Server Timestamp'
    ];
    sheet.appendRow(headers);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#d4526e');
    headerRange.setFontColor('#ffffff');
    
    // Set column widths
    sheet.setColumnWidth(1, 180);  // Timestamp
    sheet.setColumnWidth(2, 200);  // Recipient Name
    sheet.setColumnWidth(3, 200);  // Sender Name
    sheet.setColumnWidth(4, 150);  // Phone Number
    sheet.setColumnWidth(5, 180);  // Server Timestamp
    
    // Freeze header row
    sheet.setFrozenRows(1);
  }
  
  // Get or create the responses sheet
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    
    // Add headers if new sheet
    const headers = [
      'Timestamp',
      'Recipient Name',
      'Sender Name',
      'Phone Number',
      'Server Timestamp'
    ];
    sheet.appendRow(headers);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#d4526e');
    headerRange.setFontColor('#ffffff');
    
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

// Optional: Function to get all data (for testing)
function getAllData() {
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();
  Logger.log(data);
  return data;
}

// Optional: Function to clear all data except headers (for testing)
function clearAllData() {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  Logger.log('All data cleared');
}
