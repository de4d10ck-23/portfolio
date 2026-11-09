Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Let's find green pixels to locate the grid precisely.
# GitHub dark mode colors:
# Level 0 (empty): ~ #161b22 (R~22, G~27, B~34)
# Level 1: ~ #0e4429 (R~14, G~68, B~41)
# Level 2: ~ #006d32 (R~0, G~109, B~50)
# Level 3: ~ #26a641 (R~38, G~166, B~65)
# Level 4: ~ #39d353 (R~57, G~211, B~83)

# Search for the grid boundaries
$greenPixels = @()
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.G -gt 60 -and $c.G -gt ($c.R * 1.3) -and $c.G -gt ($c.B * 1.3)) {
            $greenPixels += [PSCustomObject]@{ X = $x; Y = $y; R = $c.R; G = $c.G; B = $c.B }
        }
    }
}

$minX = ($greenPixels | Measure-Object -Property X -Minimum).Minimum
$maxX = ($greenPixels | Measure-Object -Property X -Maximum).Maximum
$minY = ($greenPixels | Measure-Object -Property Y -Minimum).Minimum
$maxY = ($greenPixels | Measure-Object -Property Y -Maximum).Maximum

Write-Output "Green pixels found: $($greenPixels.Count)"
Write-Output "Bounding box of green pixels: X: $minX .. $maxX, Y: $minY .. $maxY"

$bmp.Dispose()

