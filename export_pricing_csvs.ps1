$base = "C:\Users\chris\OneDrive\Documents\west built doors app\pricing-csv"
New-Item -ItemType Directory -Path $base -Force | Out-Null

$overview = @(
  [pscustomobject]@{ Category = "Base Price"; Rule = "3200" },
  [pscustomobject]@{ Category = "Panel Surcharge"; Rule = "Smooth or Woodgrain/Fir/Mahogany/Oak: +200" },
  [pscustomobject]@{ Category = "Transom"; Rule = "+500 when Add Transom is selected" },
  [pscustomobject]@{ Category = "Fusion/Trimlite Glass"; Rule = "Final Price = (List Price x 0.5) + 300" },
  [pscustomobject]@{ Category = "Custom Glass SDL"; Rule = "Squares = (Horizontal+1)*(Vertical+1); Price = Squares x 35" }
)
$overview | Export-Csv -Path "$base\Overview.csv" -NoTypeInformation -Encoding UTF8

$paint = @(
  [pscustomobject]@{ Area="Panel"; Condition="1 paint color (ext/int same or one side only)"; AddOn=224 },
  [pscustomobject]@{ Area="Panel"; Condition="2 paint colors (ext/int different)"; AddOn=449 },
  [pscustomobject]@{ Area="Frame"; Condition="1 paint color (ext/int same or one side only)"; AddOn=139 },
  [pscustomobject]@{ Area="Frame"; Condition="2 paint colors (ext/int different)"; AddOn=231 }
)
$paint | Export-Csv -Path "$base\Paint_Pricing.csv" -NoTypeInformation -Encoding UTF8

$stain = @(
  [pscustomobject]@{ Area="Panel"; Condition="Stain both sides, same color"; AddOn=394 },
  [pscustomobject]@{ Area="Panel"; Condition="Stain both sides, 2 colors"; AddOn=676 },
  [pscustomobject]@{ Area="Panel"; Condition="Stain one side + Paint other side"; AddOn=619 },
  [pscustomobject]@{ Area="Frame"; Condition="Stain both sides, same color"; AddOn=203 },
  [pscustomobject]@{ Area="Frame"; Condition="Stain both sides, 2 colors"; AddOn=383 }
)
$stain | Export-Csv -Path "$base\Stain_Pricing.csv" -NoTypeInformation -Encoding UTF8

$hardware = @(
  [pscustomobject]@{ Option="Handle"; Selection="Grip Set"; AddOn=200 },
  [pscustomobject]@{ Option="Handle"; Selection="Multipoint"; AddOn=600 },
  [pscustomobject]@{ Option="Deadbolt & Passage"; Selection="Baldwin keypad with Key (no z wave)+ lever"; AddOn=390 },
  [pscustomobject]@{ Option="Deadbolt & Passage"; Selection="Baldwin keypad with Key (with z wave)+ lever"; AddOn=590 },
  [pscustomobject]@{ Option="Grip Set Style"; Selection="Baldwin keypad with Key (no z wave)+ lajolla bottom"; AddOn=420 },
  [pscustomobject]@{ Option="Grip Set Style"; Selection="Baldwin keypad with Key (with z wave)+ lajolla bottom"; AddOn=620 }
)
$hardware | Export-Csv -Path "$base\Hardware_Pricing.csv" -NoTypeInformation -Encoding UTF8

$customGlass = @(
  [pscustomobject]@{ GlassSize="22x64"; Option="Low-E/Clear"; AddOn=605 },
  [pscustomobject]@{ GlassSize="7x64"; Option="Low-E/Clear"; AddOn=340 },
  [pscustomobject]@{ GlassSize="22x15"; Option="Low-E/Clear"; AddOn=330 },
  [pscustomobject]@{ GlassSize="22x10"; Option="Low-E/Clear"; AddOn=330 },
  [pscustomobject]@{ GlassSize="22x17"; Option="Low-E/Clear"; AddOn=330 },
  [pscustomobject]@{ GlassSize="22x36"; Option="Low-E/Clear"; AddOn=400 },
  [pscustomobject]@{ GlassSize="22x48"; Option="Low-E/Clear"; AddOn=500 },
  [pscustomobject]@{ GlassSize="22x3"; Option="Low-E/Clear"; AddOn=320 },
  [pscustomobject]@{ GlassSize="8x48"; Option="Low-E/Clear"; AddOn=340 }
)
$customGlass | Export-Csv -Path "$base\Custom_Glass_Pricing.csv" -NoTypeInformation -Encoding UTF8

Write-Output $base
