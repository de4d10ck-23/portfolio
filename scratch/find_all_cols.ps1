Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$x0 = 486.5 - (33 * 13) # = 57.5
Write-Output "x0 = $x0"

for ($c = 0; $c -le 54; $c++) {
    $x = [Math]::Round($x0 + ($c * 13))
    $cCol = $bmp.GetPixel($x, 86)
    Write-Output "Col $c at X=$x -> R=$($cCol.R), G=$($cCol.G), B=$($cCol.B)"
}
$bmp.Dispose()

