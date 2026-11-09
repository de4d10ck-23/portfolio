Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

Write-Output "Col 0 pixels (X=58):"
for ($r = 0; $r -lt 7; $r++) {
    $y = [Math]::Round(72.5 + ($r * 13))
    $c = $bmp.GetPixel(58, $y)
    Write-Output "Row $r (Y=$y): R=$($c.R), G=$($c.G), B=$($c.B)"
}
$bmp.Dispose()
