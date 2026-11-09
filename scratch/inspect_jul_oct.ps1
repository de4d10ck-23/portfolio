Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Check cols around July (Col 34-40, X ~ 500-600)
for ($x = 490; $x -le 650; $x += 13) {
    for ($y = 73; $y -le 151; $y += 13) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.G -gt 35) {
            Write-Output "At ($x, $y) -> R=$($c.R), G=$($c.G), B=$($c.B)"
        }
    }
}

$bmp.Dispose()
