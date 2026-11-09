Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$xStart = 57
$xEnd = 742
$numCols = 53
$colPitch = ($xEnd - $xStart) / ($numCols - 1)

$yRows = @(73, 86, 99, 112, 125, 138, 151)

$grid = @()

for ($c = 0; $c -lt $numCols; $c++) {
    $x = [Math]::Round($xStart + ($c * $colPitch))
    $week = @()
    for ($r = 0; $r -lt 7; $r++) {
        $y = $yRows[$r]
        $color = $bmp.GetPixel($x, $y)
        
        # Categorize into level 0..4
        # Level 0 (dark grey): R~22, G~27, B~34 -> G < 45
        # Level 1 (dark green): G ~ 65..90, R < 30
        # Level 2 (medium green): G ~ 100..140
        # Level 3 (bright green): G ~ 150..190
        # Level 4 (neon bright green): G >= 195 (e.g. 82, 200, 95)
        
        $level = 0
        if ($color.G -ge 185 -and $color.G -gt ($color.R * 1.5)) {
            $level = 4
        } elseif ($color.G -ge 135 -and $color.G -gt ($color.R * 1.3)) {
            $level = 3
        } elseif ($color.G -ge 90 -and $color.G -gt ($color.R * 1.2)) {
            $level = 2
        } elseif ($color.G -ge 45 -and $color.G -gt ($color.R * 1.15)) {
            $level = 1
        } else {
            $level = 0
        }
        $week += $level
    }
    $grid += ,$week
}

# Print visual summary of green squares
for ($c = 0; $c -lt $numCols; $c++) {
    $active = ($grid[$c] | Where-Object { $_ -gt 0 }).Count
    if ($active -gt 0) {
        Write-Output "Col $c has $active active days: $($grid[$c] -join ',')"
    }
}

$json = ConvertTo-Json -InputObject $grid -Compress
Set-Content -Path "scratch\exact_grid.json" -Value $json

$bmp.Dispose()
Write-Output "Done! Total weeks: $($grid.Count)"

