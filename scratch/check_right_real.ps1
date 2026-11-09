Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Let's inspect the last 10 columns from right to left
# In GitHub, the current week has only Sunday (or Sun, Mon).
# Let's print out what is visible in media_1794217210215_906ec386.png on the right:
Write-Output "Checking the rightmost columns of user's screenshot:"
for ($x = 650; $x -le 745; $x += 5) {
    for ($y = 65; $y -le 160; $y += 10) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.G -gt 50 -and $c.G -gt ($c.R * 1.2)) {
            Write-Output "Green square at X=$x, Y=$y -> R=$($c.R), G=$($c.G), B=$($c.B)"
        }
    }
}
$bmp.Dispose()

