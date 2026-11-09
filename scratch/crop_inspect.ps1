Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217738228_ac662509.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)
Write-Output "Image size: $($bmp.Width) x $($bmp.Height)"

# In this screenshot, let's find the calendar grid
# Let's search for green pixels in this screenshot to find where the calendar is
$green = @()
for ($y = 0; $y -lt $bmp.Height; $y += 5) {
    for ($x = 0; $x -lt $bmp.Width; $x += 5) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.G -gt 100 -and $c.G -gt ($c.R * 1.3)) {
            $green += [PSCustomObject]@{ X = $x; Y = $y }
        }
    }
}
$minX = ($green | Measure-Object -Property X -Minimum).Minimum
$maxX = ($green | Measure-Object -Property X -Maximum).Maximum
$minY = ($green | Measure-Object -Property Y -Minimum).Minimum
$maxY = ($green | Measure-Object -Property Y -Maximum).Maximum
Write-Output "Calendar in screenshot: X=$minX..$maxX, Y=$minY..$maxY"

# Let's inspect the right edge pixels around maxX
for ($x = ($maxX - 20); $x -le ($maxX + 30); $x += 2) {
    for ($y = ($minY - 10); $y -le ($minY + 50); $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -ne 255 -or $c.G -ne 255 -or $c.B -ne 255) {
            # non white
            Write-Output "At ($x, $y): R=$($c.R), G=$($c.G), B=$($c.B)"
        }
    }
}

$bmp.Dispose()

