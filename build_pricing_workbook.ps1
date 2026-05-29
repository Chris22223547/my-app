$out = "C:\Users\chris\OneDrive\Documents\west built doors app\West_Doors_Pricing.xlsx"

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

$wb = $excel.Workbooks.Add()
while ($wb.Worksheets.Count -gt 1) {
  $wb.Worksheets.Item($wb.Worksheets.Count).Delete()
}

$ws = $wb.Worksheets.Item(1)
$ws.Name = "Overview"
$ws.Cells.Item(1,1) = "Category"
$ws.Cells.Item(1,2) = "Rule"
$ws.Cells.Item(2,1) = "Base Price"
$ws.Cells.Item(2,2) = "$3,200"
$ws.Cells.Item(3,1) = "Panel Surcharge"
$ws.Cells.Item(3,2) = "Smooth or Woodgrain/Fir/Mahogany/Oak: +$200"
$ws.Cells.Item(4,1) = "Transom"
$ws.Cells.Item(4,2) = "+$500 when Add Transom is selected"
$ws.Cells.Item(5,1) = "Fusion/Trimlite Glass"
$ws.Cells.Item(5,2) = "Final Price = (List Price x 0.5) + 300"
$ws.Cells.Item(6,1) = "Custom Glass SDL"
$ws.Cells.Item(6,2) = "Squares = (Horizontal+1)*(Vertical+1); Price = Squares x 35"
$ws.Cells.Item(8,1) = "Note"
$ws.Cells.Item(8,2) = "This reflects current pricing logic in app.js on 2026-05-29."
$ws.Rows.Item(1).Font.Bold = $true
$ws.Columns.AutoFit() | Out-Null

$paint = $wb.Worksheets.Add()
$paint.Name = "Paint Pricing"
$paint.Cells.Item(1,1) = "Area"
$paint.Cells.Item(1,2) = "Condition"
$paint.Cells.Item(1,3) = "Add-on"
$paint.Cells.Item(2,1) = "Panel"
$paint.Cells.Item(2,2) = "1 paint color (ext/int same or one side only)"
$paint.Cells.Item(2,3) = 224
$paint.Cells.Item(3,1) = "Panel"
$paint.Cells.Item(3,2) = "2 paint colors (ext/int different)"
$paint.Cells.Item(3,3) = 449
$paint.Cells.Item(4,1) = "Frame"
$paint.Cells.Item(4,2) = "1 paint color (ext/int same or one side only)"
$paint.Cells.Item(4,3) = 139
$paint.Cells.Item(5,1) = "Frame"
$paint.Cells.Item(5,2) = "2 paint colors (ext/int different)"
$paint.Cells.Item(5,3) = 231
$paint.Rows.Item(1).Font.Bold = $true
$paint.Columns.AutoFit() | Out-Null

$stain = $wb.Worksheets.Add()
$stain.Name = "Stain Pricing"
$stain.Cells.Item(1,1) = "Area"
$stain.Cells.Item(1,2) = "Condition"
$stain.Cells.Item(1,3) = "Add-on"
$stain.Cells.Item(2,1) = "Panel"
$stain.Cells.Item(2,2) = "Stain both sides, same color"
$stain.Cells.Item(2,3) = 394
$stain.Cells.Item(3,1) = "Panel"
$stain.Cells.Item(3,2) = "Stain both sides, 2 colors"
$stain.Cells.Item(3,3) = 676
$stain.Cells.Item(4,1) = "Panel"
$stain.Cells.Item(4,2) = "Stain one side + Paint other side"
$stain.Cells.Item(4,3) = 619
$stain.Cells.Item(5,1) = "Frame"
$stain.Cells.Item(5,2) = "Stain both sides, same color"
$stain.Cells.Item(5,3) = 203
$stain.Cells.Item(6,1) = "Frame"
$stain.Cells.Item(6,2) = "Stain both sides, 2 colors"
$stain.Cells.Item(6,3) = 383
$stain.Rows.Item(1).Font.Bold = $true
$stain.Columns.AutoFit() | Out-Null

$hw = $wb.Worksheets.Add()
$hw.Name = "Hardware Pricing"
$hw.Cells.Item(1,1) = "Option"
$hw.Cells.Item(1,2) = "Selection"
$hw.Cells.Item(1,3) = "Add-on"
$hw.Cells.Item(2,1) = "Handle"
$hw.Cells.Item(2,2) = "Grip Set"
$hw.Cells.Item(2,3) = 200
$hw.Cells.Item(3,1) = "Handle"
$hw.Cells.Item(3,2) = "Multipoint"
$hw.Cells.Item(3,3) = 600
$hw.Cells.Item(4,1) = "Deadbolt & Passage"
$hw.Cells.Item(4,2) = "Baldwin keypad with Key (no z wave)+ lever"
$hw.Cells.Item(4,3) = 390
$hw.Cells.Item(5,1) = "Deadbolt & Passage"
$hw.Cells.Item(5,2) = "Baldwin keypad with Key (with z wave)+ lever"
$hw.Cells.Item(5,3) = 590
$hw.Cells.Item(6,1) = "Grip Set Style"
$hw.Cells.Item(6,2) = "Baldwin keypad with Key (no z wave)+ lajolla bottom"
$hw.Cells.Item(6,3) = 420
$hw.Cells.Item(7,1) = "Grip Set Style"
$hw.Cells.Item(7,2) = "Baldwin keypad with Key (with z wave)+ lajolla bottom"
$hw.Cells.Item(7,3) = 620
$hw.Rows.Item(1).Font.Bold = $true
$hw.Columns.AutoFit() | Out-Null

$cg = $wb.Worksheets.Add()
$cg.Name = "Custom Glass Pricing"
$cg.Cells.Item(1,1) = "Glass Size"
$cg.Cells.Item(1,2) = "Option"
$cg.Cells.Item(1,3) = "Add-on"
$sizes = @(
  @("22x64","Low-E/Clear",605),
  @("7x64","Low-E/Clear",340),
  @("22x15","Low-E/Clear",330),
  @("22x10","Low-E/Clear",330),
  @("22x17","Low-E/Clear",330),
  @("22x36","Low-E/Clear",400),
  @("22x48","Low-E/Clear",500),
  @("22x3","Low-E/Clear",320),
  @("8x48","Low-E/Clear",340)
)
$r = 2
foreach ($s in $sizes) {
  $cg.Cells.Item($r,1) = $s[0]
  $cg.Cells.Item($r,2) = $s[1]
  $cg.Cells.Item($r,3) = $s[2]
  $r++
}
$cg.Rows.Item(1).Font.Bold = $true
$cg.Columns.AutoFit() | Out-Null

$fusion = $wb.Worksheets.Add()
$fusion.Name = "Fusion List Prices"
$fusion.Cells.Item(1,1) = "Style"
$fusion.Cells.Item(1,2) = "Size"
$fusion.Cells.Item(1,3) = "List Price"
$fusion.Cells.Item(1,4) = "Final Price ((List x 0.5)+300)"
$rows = @(
  @("Amsterdam 2 Zinc","22x36",451), @("Amsterdam 2 Zinc","8x36",277), @("Amsterdam 2 Zinc","22x48",573), @("Amsterdam 2 Zinc","8x48",323), @("Amsterdam 2 Zinc","22x64",672), @("Amsterdam 2 Zinc","7x64",358), @("Amsterdam 2 Zinc","22x17",320), @("Amsterdam 2 Zinc","22x14 7/16",307), @("Amsterdam 2 Zinc","22x15",324),
  @("Glacier Patina","22x36",500), @("Glacier Patina","8x36",280), @("Glacier Patina","22x48",612), @("Glacier Patina","8x48",329), @("Glacier Patina","22x64",732), @("Glacier Patina","7x64",384), @("Glacier Patina","22x17",344), @("Glacier Patina","22x14 7/16",327), @("Glacier Patina","22x15",345),
  @("Concord Patina","22x36",391), @("Concord Patina","8x36",253), @("Concord Patina","22x48",479), @("Concord Patina","8x48",293), @("Concord Patina","22x64",645), @("Concord Patina","7x64",337), @("Concord Patina","22x17",279), @("Concord Patina","22x14 7/16",265), @("Concord Patina","22x15",282),
  @("Sunningdale Zinc","22x36",428), @("Sunningdale Zinc","8x36",282), @("Sunningdale Zinc","22x48",508), @("Sunningdale Zinc","8x48",314), @("Sunningdale Zinc","22x64",606), @("Sunningdale Zinc","7x64",342), @("Sunningdale Zinc","22x17",277), @("Sunningdale Zinc","22x14 7/16",263), @("Sunningdale Zinc","22x15",277),
  @("Oak Hill Patina","22x36",370), @("Oak Hill Patina","8x36",233), @("Oak Hill Patina","22x48",456), @("Oak Hill Patina","8x48",275), @("Oak Hill Patina","22x64",532)
)
$r = 2
foreach ($row in $rows) {
  $fusion.Cells.Item($r,1) = $row[0]
  $fusion.Cells.Item($r,2) = $row[1]
  $fusion.Cells.Item($r,3) = $row[2]
  $fusion.Cells.Item($r,4) = [math]::Round(($row[2] * 0.5) + 300, 2)
  $r++
}
$fusion.Rows.Item(1).Font.Bold = $true
$fusion.Columns.AutoFit() | Out-Null

$wb.SaveAs($out, 51)
$wb.Close($true)
$excel.Quit()

[System.Runtime.Interopservices.Marshal]::ReleaseComObject($ws) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($paint) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($stain) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($hw) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($cg) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($fusion) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($wb) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null

Write-Output $out
