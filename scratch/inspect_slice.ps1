Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Let's inspect vertical slice at a column with green squares, say around X = 490 (Jul)
# Or let's inspect the rightmost green square at X=738
Write-Output "Pixel at (738, Y):"
for ($y = 60; $y -le 185; $y += 2) {
    $c = $bmp.GetPixel(738, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}
$bmp.Dispose()
