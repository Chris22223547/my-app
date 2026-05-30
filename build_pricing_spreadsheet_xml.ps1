$out = "C:\Users\chris\OneDrive\Documents\west built doors app\West_Doors_Pricing.xml"

function Escape-Xml([string]$text) {
  if ($null -eq $text) { return "" }
  return $text.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace('"', "&quot;").Replace("'", "&apos;")
}

function New-WorksheetXml([string]$name, [array]$rows) {
  $sheet = "<Worksheet ss:Name=`"$(Escape-Xml $name)`"><Table>"
  foreach ($row in $rows) {
    $sheet += "<Row>"
    foreach ($cell in $row) {
      if ($cell -is [int] -or $cell -is [double] -or $cell -is [decimal]) {
        $sheet += "<Cell><Data ss:Type=`"Number`">$cell</Data></Cell>"
      } else {
        $sheet += "<Cell><Data ss:Type=`"String`">$(Escape-Xml ([string]$cell))</Data></Cell>"
      }
    }
    $sheet += "</Row>"
  }
  $sheet += "</Table></Worksheet>"
  return $sheet
}

$overviewRows = @(
  @("Category", "Rule"),
  @("Base Price", "3200"),
  @("Panel Surcharge", "Smooth or Woodgrain/Fir/Mahogany/Oak: +200"),
  @("Transom", "+500 when Add Transom is selected"),
  @("Fusion/Trimlite Glass", "Final Price = (List Price x 0.5) + 360"),
  @("Custom Glass SDL", "Squares = (Horizontal+1)*(Vertical+1); Price = Squares x 35"),
  @("Note", "This reflects current pricing logic in app.js on 2026-05-29.")
)

$paintRows = @(
  @("Area", "Condition", "Add-on"),
  @("Panel", "1 paint color (ext/int same or one side only)", 224),
  @("Panel", "2 paint colors (ext/int different)", 449),
  @("Door Light Frame", "Door light selected and exterior or interior panel is painted", 40),
  @("Custom Color", "Each unique custom paint or stain color name", 200),
  @("Frame", "1 paint color (ext/int same or one side only)", 139),
  @("Frame", "2 paint colors (ext/int different)", 231)
)

$stainRows = @(
  @("Area", "Condition", "Add-on"),
  @("Panel", "Stain both sides, same color", 394),
  @("Panel", "Stain both sides, 2 colors", 676),
  @("Panel", "Stain one side + Paint other side", 619),
  @("Frame", "Stain both sides, same color", 203),
  @("Frame", "Stain both sides, 2 colors", 383)
)

$hardwareRows = @(
  @("Option", "Selection", "Add-on"),
  @("Handle", "Grip Set", 200),
  @("Handle", "Multipoint", 600),
  @("Deadbolt & Passage", "Baldwin keypad with Key (no z wave)+ lever", 390),
  @("Deadbolt & Passage", "Baldwin keypad with Key (with z wave)+ lever", 590),
  @("Grip Set Style", "Baldwin keypad with Key (no z wave)+ lajolla bottom", 420),
  @("Grip Set Style", "Baldwin keypad with Key (with z wave)+ lajolla bottom", 620)
)

$customGlassRows = @(
  @("Glass Size", "Option", "Add-on"),
  @("22x64", "Low-E/Clear", 605),
  @("7x64", "Low-E/Clear", 340),
  @("22x15", "Low-E/Clear", 330),
  @("22x10", "Low-E/Clear", 330),
  @("22x17", "Low-E/Clear", 330),
  @("22x36", "Low-E/Clear", 400),
  @("22x48", "Low-E/Clear", 500),
  @("22x3", "Low-E/Clear", 320),
  @("8x48", "Low-E/Clear", 340)
)

$fusionBaseRows = @(
  @("Style", "Size", "List Price", "Final Price ((List x 0.5)+360)"),
  @("Amsterdam 2 Zinc","22x36",451,[math]::Round((451*0.5)+360,2)),
  @("Amsterdam 2 Zinc","8x36",277,[math]::Round((277*0.5)+360,2)),
  @("Amsterdam 2 Zinc","22x48",573,[math]::Round((573*0.5)+360,2)),
  @("Amsterdam 2 Zinc","8x48",323,[math]::Round((323*0.5)+360,2)),
  @("Amsterdam 2 Zinc","22x64",672,[math]::Round((672*0.5)+360,2)),
  @("Amsterdam 2 Zinc","7x64",358,[math]::Round((358*0.5)+360,2)),
  @("Amsterdam 2 Zinc","22x17",320,[math]::Round((320*0.5)+360,2)),
  @("Amsterdam 2 Zinc","22x14 7/16",307,[math]::Round((307*0.5)+360,2)),
  @("Amsterdam 2 Zinc","22x15",324,[math]::Round((324*0.5)+360,2)),
  @("Glacier Patina","22x36",500,[math]::Round((500*0.5)+360,2)),
  @("Glacier Patina","8x36",280,[math]::Round((280*0.5)+360,2)),
  @("Glacier Patina","22x48",612,[math]::Round((612*0.5)+360,2)),
  @("Glacier Patina","8x48",329,[math]::Round((329*0.5)+360,2)),
  @("Glacier Patina","22x64",732,[math]::Round((732*0.5)+360,2)),
  @("Glacier Patina","7x64",384,[math]::Round((384*0.5)+360,2)),
  @("Glacier Patina","22x17",344,[math]::Round((344*0.5)+360,2)),
  @("Glacier Patina","22x14 7/16",327,[math]::Round((327*0.5)+360,2)),
  @("Glacier Patina","22x15",345,[math]::Round((345*0.5)+360,2)),
  @("Concord Patina","22x36",391,[math]::Round((391*0.5)+360,2)),
  @("Concord Patina","8x36",253,[math]::Round((253*0.5)+360,2)),
  @("Concord Patina","22x48",479,[math]::Round((479*0.5)+360,2)),
  @("Concord Patina","8x48",293,[math]::Round((293*0.5)+360,2)),
  @("Concord Patina","22x64",645,[math]::Round((645*0.5)+360,2)),
  @("Concord Patina","7x64",337,[math]::Round((337*0.5)+360,2)),
  @("Concord Patina","22x17",279,[math]::Round((279*0.5)+360,2)),
  @("Concord Patina","22x14 7/16",265,[math]::Round((265*0.5)+360,2)),
  @("Concord Patina","22x15",282,[math]::Round((282*0.5)+360,2)),
  @("Sunningdale Zinc","22x36",428,[math]::Round((428*0.5)+360,2)),
  @("Sunningdale Zinc","8x36",282,[math]::Round((282*0.5)+360,2)),
  @("Sunningdale Zinc","22x48",508,[math]::Round((508*0.5)+360,2)),
  @("Sunningdale Zinc","8x48",314,[math]::Round((314*0.5)+360,2)),
  @("Sunningdale Zinc","22x64",606,[math]::Round((606*0.5)+360,2)),
  @("Sunningdale Zinc","7x64",342,[math]::Round((342*0.5)+360,2)),
  @("Sunningdale Zinc","22x17",277,[math]::Round((277*0.5)+360,2)),
  @("Sunningdale Zinc","22x14 7/16",263,[math]::Round((263*0.5)+360,2)),
  @("Sunningdale Zinc","22x15",277,[math]::Round((277*0.5)+360,2)),
  @("Oak Hill Patina","22x36",370,[math]::Round((370*0.5)+360,2)),
  @("Oak Hill Patina","8x36",233,[math]::Round((233*0.5)+360,2)),
  @("Oak Hill Patina","22x48",456,[math]::Round((456*0.5)+360,2)),
  @("Oak Hill Patina","8x48",275,[math]::Round((275*0.5)+360,2)),
  @("Oak Hill Patina","22x64",532,[math]::Round((532*0.5)+360,2))
)

$xml = @"
<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
$(New-WorksheetXml "Overview" $overviewRows)
$(New-WorksheetXml "Paint Pricing" $paintRows)
$(New-WorksheetXml "Stain Pricing" $stainRows)
$(New-WorksheetXml "Hardware Pricing" $hardwareRows)
$(New-WorksheetXml "Custom Glass Pricing" $customGlassRows)
$(New-WorksheetXml "Fusion List Prices" $fusionBaseRows)
</Workbook>
"@

Set-Content -Path $out -Value $xml -Encoding UTF8
Write-Output $out
