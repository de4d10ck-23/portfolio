Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Check the leftmost empty square around X = 40..80, Y = 73 or 86
# Empty square is ~ R=20, G=26, B=34. Background is R=13, G=17, B=23.
for ($x = 40; $x -le 100; $x++) {
    $c = $bmp.GetPixel($x, 86)
    if ($c.G -gt 23) {
        Write-Output "Found square start at X=$x : $($c.R),$($c.G),$($c.B)"
        break
    }
}
$bmp.Dispose()
