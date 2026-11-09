Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Empty square center has color around R=20, G=26, B=34
for ($x = 45; $x -le 100; $x++) {
    $c = $bmp.GetPixel($x, 73)
    if ($c.G -gt 23 -and $c.G -lt 40) {
        Write-Output "Found empty square at X=$x : $($c.R),$($c.G),$($c.B)"
        break
    }
}

$bmp.Dispose()
