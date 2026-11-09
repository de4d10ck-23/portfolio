Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Check Col 52 (X ~ 733) for all 7 rows:
Write-Output "Col 52 pixels (X=733):"
for ($r = 0; $r -lt 7; $r++) {
    $y = [Math]::Round(72.5 + ($r * 13))
    $c = $bmp.GetPixel(733, $y)
    Write-Output "Row $r (Y=$y): R=$($c.R), G=$($c.G), B=$($c.B)"
}

Write-Output "`nCol 51 pixels (X=720):"
for ($r = 0; $r -lt 7; $r++) {
    $y = [Math]::Round(72.5 + ($r * 13))
    $c = $bmp.GetPixel(720, $y)
    Write-Output "Row $r (Y=$y): R=$($c.R), G=$($c.G), B=$($c.B)"
}

$bmp.Dispose()
