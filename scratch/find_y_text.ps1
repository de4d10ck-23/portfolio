Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

for ($y = 35; $y -le 65; $y += 3) {
    $c = $bmp.GetPixel(60, $y) # Under "Nov"
    if ($c.R -gt 70) {
        Write-Output "Text found at Y=$y : $($c.R),$($c.G),$($c.B)"
    }
}
$bmp.Dispose()
