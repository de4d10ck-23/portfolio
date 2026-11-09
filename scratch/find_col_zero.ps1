Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# 486.5 - (N * 13)
for ($n = 30; $n -le 35; $n++) {
    $x = 486.5 - ($n * 13)
    $xInt = [Math]::Round($x)
    $c = $bmp.GetPixel($xInt, 86)
    Write-Output "N=$n -> X=$xInt : R=$($c.R), G=$($c.G), B=$($c.B)"
}
$bmp.Dispose()

