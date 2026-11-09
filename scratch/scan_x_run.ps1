Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Check line Y = 112 from X = 480 to 560
Write-Output "Scanning Y=112 across X=480..560:"
for ($x = 480; $x -le 560; $x++) {
    $c = $bmp.GetPixel($x, 112)
    if ($c.G -gt 35) {
        Write-Output "X=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
    }
}
$bmp.Dispose()

